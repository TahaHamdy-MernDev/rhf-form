import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";

type RHFSwitchFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;

  description?: string;
  disabled?: boolean;
  required?: boolean;

  className?: string;
  containerClassName?: string;

  /** Optional callback when value changes */
  onCheckedChange?: (checked: boolean) => void;
};

export function RHFSwitchField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disabled,
  required,
  className,
  containerClassName,
  onCheckedChange,
}: RHFSwitchFieldProps<T>) {
  const { Switch, Field, FieldLabel, FieldError } = useFormUI();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          className={cn("space-y-2", containerClassName)}
        >
          <div
            className={cn("flex items-center justify-between gap-3", className)}
          >
            <div className="space-y-1">
              <FieldLabel>
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </FieldLabel>
              {description && (
                <p className="text-muted-foreground text-sm">{description}</p>
              )}
            </div>

            <Switch
              checked={!!field.value}
              onCheckedChange={(checked: boolean) => {
                field.onChange(checked);
                onCheckedChange?.(checked);
              }}
              disabled={disabled}
              aria-invalid={fieldState.invalid}
            />
          </div>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
