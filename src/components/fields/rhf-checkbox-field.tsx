import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";

type RHFCheckboxFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;

  label?: string;
  description?: string;

  disabled?: boolean;

  className?: string;

  checkboxClassName?: string;
};

export function RHFCheckboxField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disabled,
  className,
  checkboxClassName,
  ...props
}: RHFCheckboxFieldProps<T>) {
  const { Checkbox, Field, FieldLabel, FieldError } = useFormUI();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          className={cn("space-y-2", className)}
        >
          <div className="flex items-center gap-3">
            <Checkbox
              name={field.name}
              checked={!!field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
              className={checkboxClassName}
              {...props}
            />

            {(label || description) && (
              <div className="grid gap-1 leading-none">
                {label && (
                  <FieldLabel className="font-medium">
                    <p>{label}</p>
                  </FieldLabel>
                )}
                {description && (
                  <p className="text-sm text-muted-foreground">{description}</p>
                )}
              </div>
            )}
          </div>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
