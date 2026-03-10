import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Controller } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
export function RHFDatePickerField({ control, name, label, }) {
    const [open, setOpen] = React.useState(false);
    const { Calendar, Popover, PopoverContent, PopoverTrigger, Field, FieldLabel, FieldError, InputGroup, InputGroupAddon, Input, } = useFormUI();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => (_jsxs(Field, { "data-invalid": fieldState.invalid, children: [_jsx(FieldLabel, { children: label }), _jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(InputGroup, { children: [_jsx(InputGroupAddon, { align: "inline-end", children: _jsx(CalendarIcon, {}) }), _jsx(Input, { value: field.value ? field.value.toLocaleDateString() : "", className: "rtl:border-l-0 rtl:rounded-tl-none rtl:rounded-bl-none", readOnly: true })] }) }), _jsx(PopoverContent, { className: "w-auto p-0", align: "center", children: _jsx(Calendar, { mode: "single", selected: field.value, onSelect: (date) => {
                                    field.onChange(date);
                                    setOpen(false);
                                }, captionLayout: "dropdown" }) })] }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] })) }));
}
