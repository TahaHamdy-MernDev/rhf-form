import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";
export function RHFCheckboxField({ control, name, label, description, disabled, className, checkboxClassName, ...props }) {
    const { Checkbox, Field, FieldLabel, FieldError } = useFormUI();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => (_jsxs(Field, { "data-invalid": fieldState.invalid, className: cn("space-y-2", className), children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Checkbox, { checked: !!field.value, onCheckedChange: field.onChange, disabled: disabled, className: checkboxClassName, ...props }), (label || description) && (_jsxs("div", { className: "grid gap-1 leading-none", children: [label && (_jsx(FieldLabel, { className: "font-medium", children: _jsx("p", { children: label }) })), description && (_jsx("p", { className: "text-sm text-muted-foreground", children: description }))] }))] }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] })) }));
}
