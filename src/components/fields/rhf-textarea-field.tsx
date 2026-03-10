import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";

type RHFTextareaFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  description?: string;
  maxLength?: number;
  placeholder?: string;
  rows?: number;
  className?: string;
  border?: string;
};

export function RHFTextareaField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  maxLength,
  placeholder,
  className,
  rows = 5,
  border,
}: RHFTextareaFieldProps<T>) {
  const { Field, FieldLabel, FieldDescription, FieldError, InputGroup } =
    useFormUI();

  // Note: Assuming InputGroup component handles the Addon/Text/Textarea subcomponents or we use regular html if needed.
  // We should pass InputGroup as a single wrapper if it exists in the UI context.
  // Let's assume Textarea is passed directly as Textarea and standard InputGroup structure.
  const { Textarea } = useFormUI();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel>{label}</FieldLabel>}

          <Textarea
            {...field}
            rows={rows}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            className={className}
          />

          {description && <FieldDescription>{description}</FieldDescription>}

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
