import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";
export function RHFInputField({ control, name, label, placeholder, disabled, className, type = "text", }) {
    const { Input, Field, FieldLabel, FieldError, InputGroup } = useFormUI();
    return (_jsx(_Fragment, { children: _jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => (_jsxs(Field, { "data-invalid": fieldState.invalid, className: cn(className), children: [_jsx(FieldLabel, { children: label }), _jsx(InputGroup, { children: _jsx(Input, { ...field, value: type === "number"
                                ? Number(field.value)
                                    ? field.value
                                    : ""
                                : field.value, placeholder: placeholder, disabled: disabled, "aria-invalid": fieldState.invalid, type: type }) }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] })) }) }));
}
