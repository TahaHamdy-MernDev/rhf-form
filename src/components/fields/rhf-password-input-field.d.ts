import { Control, FieldValues, Path } from "react-hook-form";
type RHFPasswordInputFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};
export declare function RHFPasswordInputField<T extends FieldValues>({ control, name, label, placeholder, disabled, className, }: RHFPasswordInputFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-password-input-field.d.ts.map