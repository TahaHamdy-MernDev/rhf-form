import { type Control, type FieldPath, type FieldValues } from "react-hook-form";
type RHFImageUploadProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label?: string;
    multiple?: boolean;
    maxFiles?: number;
    maxSizeMB?: number;
    accept?: string;
    disabled?: boolean;
    className?: string;
    dropzoneClassName?: string;
    initialUrls?: string[];
    initialUrl?: string;
    helperText?: string;
    showRequirements?: boolean;
    showCapacityBar?: boolean;
};
export declare function RHFImageUpload<T extends FieldValues>({ control, name, label, multiple, maxFiles, maxSizeMB, accept, disabled, className, dropzoneClassName, initialUrl, initialUrls, helperText, showCapacityBar, }: RHFImageUploadProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-image-upload.d.ts.map