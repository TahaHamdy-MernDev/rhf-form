import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useFormConfig, useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";
export function RHFDialogForm({ form, trigger, title, description, onSubmit, children, loading, width, }) {
    const [open, setOpen] = React.useState(false);
    const { dictionary } = useFormConfig();
    const { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } = useFormUI();
    function handleCancel() {
        form.reset();
        setOpen(false);
    }
    async function handleSubmit(data) {
        await onSubmit(data);
        form.reset();
        setOpen(false);
    }
    return (_jsxs(Dialog, { open: open, onOpenChange: setOpen, children: [_jsx(DialogTrigger, { asChild: true, children: typeof trigger === "string" ? _jsx(Button, { children: trigger }) : trigger }), _jsxs(DialogContent, { className: cn("sm:max-w-[425px]", width), children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: title }), description && _jsx(DialogDescription, { children: description })] }), _jsxs("form", { onSubmit: form.handleSubmit(handleSubmit), className: "space-y-4", children: [children, _jsxs(DialogFooter, { className: "gap-2", children: [_jsx(DialogClose, { type: "button", onClick: handleCancel, className: "cursor-pointer", disabled: loading, children: dictionary.cancel }), _jsx(Button, { type: "submit", variant: "default", is_loading: loading, disabled: loading, children: dictionary.save })] })] })] })] }));
}
