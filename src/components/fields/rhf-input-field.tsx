import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";

type RHFInputFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  className?: string;
};

export function RHFInputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  disabled,
  className,
  type = "text",
}: RHFInputFieldProps<T>) {
  const { Input, Field, FieldLabel, FieldError, InputGroup } = useFormUI();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className={cn(className)}>
            <FieldLabel>{label}</FieldLabel>
            <InputGroup>
              <Input
                {...field}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const val = e.target.value;
                  field.onChange(
                    type === "number" ? (val === "" ? "" : Number(val)) : val,
                  );
                }}
                value={
                  type === "number"
                    ? Number(field.value) || field.value === 0
                      ? field.value
                      : ""
                    : field.value
                }
                placeholder={placeholder}
                disabled={disabled}
                aria-invalid={fieldState.invalid}
                type={type}
              />
            </InputGroup>
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </>
  );
}
