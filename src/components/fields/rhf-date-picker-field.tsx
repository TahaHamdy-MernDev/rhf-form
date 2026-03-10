import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { useFormUI } from "../../providers/form-config-provider";

type RHFDatePickerFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
};

export function RHFDatePickerField<T extends FieldValues>({
  control,
  name,
  label,
}: RHFDatePickerFieldProps<T>) {
  const [open, setOpen] = React.useState(false);
  const {
    Calendar,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Field,
    FieldLabel,
    FieldError,
    InputGroup,
    InputGroupAddon,
    Input,
  } = useFormUI();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroup>
                <InputGroupAddon align={"inline-end"}>
                  <CalendarIcon />
                </InputGroupAddon>
                <Input
                  value={field.value ? field.value.toLocaleDateString() : ""}
                  className="rtl:border-l-0 rtl:rounded-tl-none rtl:rounded-bl-none"
                  readOnly
                />
              </InputGroup>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="center">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date: Date | undefined) => {
                  field.onChange(date);
                  setOpen(false);
                }}
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
