import { Control, FieldValues, Path } from "react-hook-form";
type RHFInputFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    type?: string;
    className?: string;
};
export declare function RHFInputField<T extends FieldValues>({ control, name, label, placeholder, disabled, className, type, }: RHFInputFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-input-field.d.ts.map