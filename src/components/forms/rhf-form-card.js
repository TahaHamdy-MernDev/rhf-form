import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormConfig, useFormUI } from "../../providers/form-config-provider";
import MainCard from "../cards/main-card";
export function RHFFormCard({ form, title, description, onSubmit, children, show_actions = true, loading = false, }) {
    const { dictionary } = useFormConfig();
    const { Button, CardFooter } = useFormUI();
    function handleCancel() {
        form.reset();
    }
    async function handleSubmit(data) {
        await onSubmit(data);
        form.reset();
    }
    return (_jsx(MainCard, { title: title || "", description: description || "", classes: { card: "gap-0!", content: "mt-0!" }, with_hover: false, children: _jsxs("form", { onSubmit: form.handleSubmit(handleSubmit), className: "space-y-4", children: [children, show_actions && (_jsxs(CardFooter, { className: "flex justify-end gap-2 px-0!", children: [_jsx(Button, { type: "button", variant: "ghost", disabled: loading, onClick: handleCancel, children: dictionary.cancel }), _jsx(Button, { type: "submit", disabled: loading, is_loading: loading, children: dictionary.save })] }))] }) }));
}
