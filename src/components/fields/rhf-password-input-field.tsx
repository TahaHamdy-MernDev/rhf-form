import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type RHFPasswordInputFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function RHFPasswordInputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  disabled,
  className,
}: RHFPasswordInputFieldProps<T>) {
  const { Input, Field, FieldLabel, FieldError, InputGroup } = useFormUI();

  // Note: we assume InputGroup provides Addon and Button natively or the consumer uses a standard Input
  // with icons passed via classNames. In our UI system, let's assume `InputGroupAddon` and `InputGroupButton`
  // are also provided by `useFormUI()` or we use simple HTML elements for icons.
  // The system earlier expected `InputGroupAddon` but it's easier to just assume they provide standard components.
  const { InputGroupAddon, InputGroupButton } = useFormUI(); // Optional if not standard, but we'll add it to the provider next.

  const [type, setType] = useState("password");
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className={className}>
          <FieldLabel>{label}</FieldLabel>
          <InputGroup>
            <Input
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              aria-invalid={fieldState.invalid}
              type={type}
              className="rtl:border-l-0 rtl:rounded-tl-none rtl:rounded-bl-none"
            />
            <InputGroupAddon align={"inline-end"}>
              <InputGroupButton
                onClick={() =>
                  setType(type === "password" ? "text" : "password")
                }
                className="hover:bg-transparent"
              >
                {type === "password" ? <Eye /> : <EyeOff />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
