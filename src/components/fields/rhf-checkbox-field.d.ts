import { Control, FieldValues, Path } from "react-hook-form";
type RHFCheckboxFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    description?: string;
    disabled?: boolean;
    className?: string;
    checkboxClassName?: string;
};
export declare function RHFCheckboxField<T extends FieldValues>({ control, name, label, description, disabled, className, checkboxClassName, ...props }: RHFCheckboxFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-checkbox-field.d.ts.map