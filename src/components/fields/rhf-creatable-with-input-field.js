import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Controller } from "react-hook-form";
import { CheckIcon, Plus } from "lucide-react";
import { useFormConfig, useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";
function defaultAddLabel(v) {
    return `Add "${v}"`;
}
function defaultNormalize(v) {
    return v.trim();
}
export function RHFCreatableSelectField({ control, name, label, options, placeholder = "Select…", addLabel = defaultAddLabel, disabled, className, normalize = defaultNormalize, }) {
    const { dictionary } = useFormConfig();
    const { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger, Field, FieldLabel, FieldError, Input, InputGroup, } = useFormUI();
    const listId = React.useId();
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState("");
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => {
            const currentValue = String(field.value ?? "");
            const selectedOption = options.find((o) => o.value === currentValue);
            const displayLabel = selectedOption?.label ?? (currentValue || "");
            const normalizedQuery = normalize(query);
            const canAdd = normalizedQuery.length > 0 &&
                !options.some((o) => o.value.toLowerCase() === normalizedQuery.toLowerCase());
            function commit(value) {
                const v = normalize(value);
                field.onChange(v);
                setOpen(false);
                setQuery("");
            }
            return (_jsxs(Field, { "data-invalid": fieldState.invalid, className: cn(className), children: [_jsx(FieldLabel, { children: label }), _jsxs(Popover, { open: open, onOpenChange: (v) => (disabled ? null : setOpen(v)), children: [_jsx(PopoverTrigger, { className: "w-full", asChild: true, children: _jsx(InputGroup, { children: _jsx(Input, { type: "text", role: "combobox", readOnly: true, "aria-expanded": open, "aria-controls": listId, "aria-invalid": fieldState.invalid, value: displayLabel.toString() ?? placeholder, disabled: disabled }) }) }), _jsx(PopoverContent, { className: "w-full p-0", align: "center", children: _jsxs(Command
                                // Enter will select the highlighted item, but we also handle adding directly
                                , { 
                                    // Enter will select the highlighted item, but we also handle adding directly
                                    onKeyDown: (e) => {
                                        if (e.key === "Enter" && canAdd) {
                                            e.preventDefault();
                                            commit(query);
                                        }
                                    }, children: [_jsx(CommandInput, { value: query, onValueChange: setQuery, placeholder: dictionary.search_or_type }), _jsxs(CommandList, { id: listId, children: [_jsx(CommandEmpty, { children: canAdd ? (_jsxs("button", { type: "button", className: "flex w-full items-center gap-2 px-2 py-2 text-sm", onClick: () => commit(query), children: [_jsx(Plus, { className: "h-4 w-4" }), addLabel(normalizedQuery)] })) : (_jsx("div", { className: "px-2 py-2 text-sm text-muted-foreground", children: dictionary.no_results })) }), canAdd && (_jsx(CommandGroup, { children: _jsxs(CommandItem, { value: `__add__${normalizedQuery}`, onSelect: () => commit(query), children: [_jsx(Plus, { className: "mr-2 h-4 w-4" }), addLabel(normalizedQuery)] }) })), _jsx(CommandGroup, { children: options.map((opt) => (_jsxs(CommandItem, { value: String(opt.label), onSelect: () => commit(opt.value), children: [_jsx("span", { "data-slot": "select-item-indicator", className: cn("absolute ltr:right-2 rtl:left-2 flex size-3.5 items-center justify-center", opt.value === currentValue
                                                                    ? "opacity-100"
                                                                    : "opacity-0"), children: _jsx(CheckIcon, {}) }), opt.label] }, opt.value))) })] })] }) })] }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] }));
        } }));
}
