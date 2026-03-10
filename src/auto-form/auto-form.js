import { jsx as _jsx } from "react/jsx-runtime";
import { resolveFieldInfo } from "./field-resolver";
import { cn } from "../utils/cn";
export function AutoForm({ schema, control, fieldOverrides, layout = "stack", className, }) {
    const shape = schema.shape;
    const keys = Object.keys(shape);
    return (_jsx("div", { className: cn(layout === "stack"
            ? "flex flex-col gap-4"
            : "grid grid-cols-1 md:grid-cols-2 gap-4", className), children: keys.map((key) => {
            const fieldSchema = shape[key];
            const { Component, props } = resolveFieldInfo(key, fieldSchema, fieldOverrides);
            return (_jsx(Component, { name: key, control: control, ...props }, key));
        }) }));
}
