import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type RHFSelectFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  options?: Option[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
};

const EMPTY_OPTIONS: Option[] = [];

export function RHFSelectField<T extends FieldValues>({
  control,
  name,
  label,
  options = EMPTY_OPTIONS,
  placeholder = "",
  disabled = false,
  className = "",
  onChange,
}: RHFSelectFieldProps<T>) {
  const {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Field,
    FieldLabel,
    FieldError,
  } = useFormUI();

  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      aria-disabled={disabled}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          aria-disabled={disabled}
          className={className}
        >
          <FieldLabel>{label}</FieldLabel>

          <Select
            name={field.name}
            value={field.value ?? ""}
            onValueChange={(val: string) => {
              field.onChange(val);
              if (onChange) onChange(val);
            }}
            disabled={disabled}
          >
            <SelectTrigger
              aria-invalid={fieldState.invalid}
              aria-disabled={disabled}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent position="popper" aria-disabled={disabled}>
              {options.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  disabled={disabled || opt.disabled}
                  aria-disabled={disabled || opt.disabled}
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
