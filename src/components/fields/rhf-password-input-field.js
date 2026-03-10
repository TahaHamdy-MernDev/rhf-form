import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
export function RHFPasswordInputField({ control, name, label, placeholder, disabled, className, }) {
    const { Input, Field, FieldLabel, FieldError, InputGroup } = useFormUI();
    // Note: we assume InputGroup provides Addon and Button natively or the consumer uses a standard Input
    // with icons passed via classNames. In our UI system, let's assume `InputGroupAddon` and `InputGroupButton`
    // are also provided by `useFormUI()` or we use simple HTML elements for icons.
    // The system earlier expected `InputGroupAddon` but it's easier to just assume they provide standard components.
    const { InputGroupAddon, InputGroupButton } = useFormUI(); // Optional if not standard, but we'll add it to the provider next.
    const [type, setType] = useState("password");
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => (_jsxs(Field, { "data-invalid": fieldState.invalid, className: className, children: [_jsx(FieldLabel, { children: label }), _jsxs(InputGroup, { children: [_jsx(Input, { ...field, placeholder: placeholder, disabled: disabled, "aria-invalid": fieldState.invalid, type: type, className: "rtl:border-l-0 rtl:rounded-tl-none rtl:rounded-bl-none" }), _jsx(InputGroupAddon, { align: "inline-end", children: _jsx(InputGroupButton, { onClick: () => setType(type === "password" ? "text" : "password"), className: "hover:bg-transparent", children: type === "password" ? _jsx(Eye, {}) : _jsx(EyeOff, {}) }) })] }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] })) }));
}
