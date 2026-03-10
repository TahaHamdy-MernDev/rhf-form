import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
export function RHFInternationalPhoneField({ control, name, label, placeholder, disabled, }) {
    const { PhoneInput, Field, FieldLabel, FieldError } = useFormUI();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => (_jsxs(Field, { "data-invalid": fieldState.invalid, children: [_jsx(FieldLabel, { children: label }), _jsx(PhoneInput, { ...field, placeholder: placeholder, disabled: disabled, "aria-invalid": fieldState.invalid }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] })) }));
}
