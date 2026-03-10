import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
import { useFormUI } from "../../providers/form-config-provider";
function MainCard({ title, description, right, children, footer, classes, with_hover = true, }) {
    const { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, } = useFormUI();
    return (_jsxs(Card, { className: cn("group relative overflow-hidden rounded-2xl p-5", "border border-border bg-card text-card-foreground", "shadow-none transition", classes?.card), children: [with_hover && (_jsx("div", { className: "pointer-events-none absolute -right-10 -top-10 h-[30%] w-[40%] rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" })), _jsxs(CardHeader, { className: cn("p-0", classes?.header), children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-xl font-bold", children: title }), right && (_jsx("span", { className: "text-sm text-muted-foreground", children: right }))] }), description && _jsx(CardDescription, { children: description })] }), _jsx(CardContent, { className: cn("mt-4 p-0", classes?.content), children: children }), footer && (_jsx(CardFooter, { className: cn("mt-4 p-0", classes?.footer), children: footer }))] }));
}
export default MainCard;
