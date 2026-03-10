import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Controller } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useFormUI } from "../../providers/form-config-provider";
import { startOfToday, endOfToday, startOfYesterday, endOfYesterday, subDays, startOfMonth, endOfMonth, startOfYear, endOfYear, } from "date-fns";
const PREDEFINED_RANGES = [
    {
        label: "Today",
        getRange: () => ({
            from: startOfToday(),
            to: endOfToday(),
        }),
    },
    {
        label: "Yesterday",
        getRange: () => ({
            from: startOfYesterday(),
            to: endOfYesterday(),
        }),
    },
    {
        label: "Last 7 Days",
        getRange: () => ({
            from: subDays(startOfToday(), 6),
            to: endOfToday(),
        }),
    },
    {
        label: "Last 30 Days",
        getRange: () => ({
            from: subDays(startOfToday(), 29),
            to: endOfToday(),
        }),
    },
    {
        label: "This Month",
        getRange: () => ({
            from: startOfMonth(new Date()),
            to: endOfMonth(new Date()),
        }),
    },
    {
        label: "This Year",
        getRange: () => ({
            from: startOfYear(new Date()),
            to: endOfYear(new Date()),
        }),
    },
];
export function RHFDateRangePickerField({ control, name, label, }) {
    const [open, setOpen] = React.useState(false);
    const [tempRange, setTempRange] = React.useState();
    const { Calendar, Button, Popover, PopoverContent, PopoverTrigger, Field, FieldLabel, FieldError, InputGroup, InputGroupAddon, Input, } = useFormUI();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState }) => {
            const value = field.value;
            const formatted_range = value
                ? value.from && value.to
                    ? `${format(value.from, "PPP")} - ${format(value.to, "PPP")}`
                    : ""
                : "";
            return (_jsxs(Field, { "data-invalid": fieldState.invalid, children: [_jsx(FieldLabel, { children: label }), _jsxs(Popover, { open: open, onOpenChange: (o) => {
                            setOpen(o);
                            if (o) {
                                setTempRange(value);
                            }
                        }, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(InputGroup, { children: [_jsx(InputGroupAddon, { align: "inline-end", children: _jsx(CalendarIcon, { className: "opacity-50 dark:text-white" }) }), _jsx(Input, { value: formatted_range, className: "rtl:border-l-0 rtl:rounded-tl-none rtl:rounded-bl-none", readOnly: true })] }) }), _jsxs(PopoverContent, { align: "center", className: "flex items-center  w-auto space-y-3 p-3", children: [_jsx("div", { className: "flex flex-col gap-2", children: PREDEFINED_RANGES.map((preset) => (_jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => setTempRange(preset.getRange()), children: preset.label }, preset.label))) }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Calendar, { mode: "range", selected: tempRange, defaultMonth: tempRange?.from, onSelect: setTempRange, numberOfMonths: 2 }), _jsxs("div", { className: "flex items-center justify-between gap-2 pt-2", children: [_jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => {
                                                            setTempRange(undefined);
                                                        }, children: "Clear" }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => {
                                                                    setTempRange(value);
                                                                    setOpen(false);
                                                                }, children: "Cancel" }), _jsx(Button, { type: "button", size: "sm", disabled: !tempRange?.from || !tempRange?.to, onClick: () => {
                                                                    field.onChange(tempRange);
                                                                    setOpen(false);
                                                                }, children: "Confirm" })] })] })] })] })] }), fieldState.error && _jsx(FieldError, { errors: [fieldState.error] })] }));
        } }));
}
