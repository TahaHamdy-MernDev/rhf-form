import { Control, FieldValues, Path } from "react-hook-form";
type RHFTextareaFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    description?: string;
    maxLength?: number;
    placeholder?: string;
    rows?: number;
    className?: string;
    border?: string;
};
export declare function RHFTextareaField<T extends FieldValues>({ control, name, label, description, maxLength, placeholder, className, rows, border, }: RHFTextareaFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-textarea-field.d.ts.map