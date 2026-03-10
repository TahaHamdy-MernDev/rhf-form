import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
const EMPTY_OPTIONS = [];
export function RHFSelectField({ control, name, label, options = EMPTY_OPTIONS, placeholder = "", disabled = false, className = "", onChange, }) {
    const { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Field, FieldLabel, FieldError, } = useFormUI();
    return (_jsx(Controller, { name: name, control: control, disabled: disabled, "aria-disabled": disabled, render: ({ field, fieldState }) => (_jsxs(Field, { "data-invalid": fieldState.invalid, "aria-disabled": disabled, className: className, children: [_jsx(FieldLabel, { children: label }), _jsxs(Select, { value: field.value ?? "", onValueChange: (val) => {
                        field.onChange(val);
                        if (onChange)
                            onChange(val);
                    }, disabled: disabled, children: [_jsx(SelectTrigger, { "aria-invalid": fieldState.invalid, "aria-disabled": disabled, children: _jsx(SelectValue, { placeholder: placeholder }) }), _jsx(SelectContent, { position: "popper", "aria-disabled": disabled, children: options.map((opt) => (_jsx(SelectItem, { value: opt.value, disabled: disabled || opt.disabled, "aria-disabled": disabled || opt.disabled, children: opt.label }, opt.value))) })] }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] })) }));
}
