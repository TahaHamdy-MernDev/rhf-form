import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { useFormUI } from "../../providers/form-config-provider";
export function RHFTextareaField({ control, name, label, description, maxLength, placeholder, className, rows = 5, border, }) {
    const { Field, FieldLabel, FieldDescription, FieldError, InputGroup } = useFormUI();
    // Note: Assuming InputGroup component handles the Addon/Text/Textarea subcomponents or we use regular html if needed.
    // We should pass InputGroup as a single wrapper if it exists in the UI context.
    // Let's assume Textarea is passed directly as Textarea and standard InputGroup structure.
    const { Textarea } = useFormUI();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => (_jsxs(Field, { "data-invalid": fieldState.invalid, children: [label && _jsx(FieldLabel, { children: label }), _jsx(Textarea, { ...field, rows: rows, "aria-invalid": fieldState.invalid, placeholder: placeholder, className: className }), description && _jsx(FieldDescription, { children: description }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] })) }));
}
