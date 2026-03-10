import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
import { useFormUI } from "../../providers/form-config-provider";
export function RHFFormSection({ title, children, endContent, className, }) {
    const { FieldGroup } = useFormUI();
    return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-sm font-semibold text-foreground", children: title }), endContent] }), _jsx(FieldGroup, { className: cn("ltr:pl-3 rtl:pr-3 ltr:border-l rtl:border-r border-border", className), children: children })] }));
}
