import { Control, FieldValues, Path } from "react-hook-form";
type RHFDateRangePickerFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
};
export declare function RHFDateRangePickerField<T extends FieldValues>({ control, name, label, }: RHFDateRangePickerFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-date-range-picker-field.d.ts.map