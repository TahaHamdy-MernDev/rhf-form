import { Control, FieldValues, Path } from "react-hook-form";
type RHFDatePickerFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
};
export declare function RHFDatePickerField<T extends FieldValues>({ control, name, label, }: RHFDatePickerFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-date-picker-field.d.ts.map