import { Control, FieldValues, Path } from "react-hook-form";
type RHFInternationalPhoneFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    disabled?: boolean;
};
export declare function RHFInternationalPhoneField<T extends FieldValues>({ control, name, label, placeholder, disabled, }: RHFInternationalPhoneFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-international-phone-field.d.ts.map