import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";
export function RHFSwitchField({ control, name, label, description, disabled, required, className, containerClassName, onCheckedChange, }) {
    const { Switch, Field, FieldLabel, FieldError } = useFormUI();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => (_jsxs(Field, { "data-invalid": fieldState.invalid, className: cn("space-y-2", containerClassName), children: [_jsxs("div", { className: cn("flex items-center justify-between gap-3", className), children: [_jsxs("div", { className: "space-y-1", children: [_jsxs(FieldLabel, { children: [label, required && _jsx("span", { className: "text-destructive ml-1", children: "*" })] }), description && (_jsx("p", { className: "text-muted-foreground text-sm", children: description }))] }), _jsx(Switch, { checked: !!field.value, onCheckedChange: (checked) => {
                                field.onChange(checked);
                                onCheckedChange?.(checked);
                            }, disabled: disabled, "aria-invalid": fieldState.invalid })] }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] })) }));
}
