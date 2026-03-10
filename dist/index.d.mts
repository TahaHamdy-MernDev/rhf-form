import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { FieldValues, UseFormReturn, SubmitHandler, Control, Path, FieldPath } from 'react-hook-form';
import { z } from 'zod';

type FormDictionary = {
    cancel: string;
    save: string;
    search_or_type: string;
    no_results: string;
};
type FormUIComponents = {
    Input: React__default.ComponentType<any>;
    Textarea: React__default.ComponentType<any>;
    Select: React__default.ComponentType<any>;
    SelectTrigger: React__default.ComponentType<any>;
    SelectValue: React__default.ComponentType<any>;
    SelectContent: React__default.ComponentType<any>;
    SelectItem: React__default.ComponentType<any>;
    Switch: React__default.ComponentType<any>;
    Checkbox: React__default.ComponentType<any>;
    Button: React__default.ComponentType<any>;
    Card: React__default.ComponentType<any>;
    CardHeader: React__default.ComponentType<any>;
    CardTitle: React__default.ComponentType<any>;
    CardDescription: React__default.ComponentType<any>;
    CardContent: React__default.ComponentType<any>;
    CardFooter: React__default.ComponentType<any>;
    Dialog: React__default.ComponentType<any>;
    DialogTrigger: React__default.ComponentType<any>;
    DialogClose: React__default.ComponentType<any>;
    DialogContent: React__default.ComponentType<any>;
    DialogHeader: React__default.ComponentType<any>;
    DialogTitle: React__default.ComponentType<any>;
    DialogDescription: React__default.ComponentType<any>;
    DialogFooter: React__default.ComponentType<any>;
    Separator: React__default.ComponentType<any>;
    Field: React__default.ComponentType<any>;
    FieldGroup: React__default.ComponentType<any>;
    FieldLabel: React__default.ComponentType<any>;
    FieldDescription: React__default.ComponentType<any>;
    FieldError: React__default.ComponentType<any>;
    Label: React__default.ComponentType<any>;
    Popover: React__default.ComponentType<any>;
    PopoverTrigger: React__default.ComponentType<any>;
    PopoverContent: React__default.ComponentType<any>;
    Calendar: React__default.ComponentType<any>;
    Command: React__default.ComponentType<any>;
    CommandInput: React__default.ComponentType<any>;
    CommandEmpty: React__default.ComponentType<any>;
    CommandGroup: React__default.ComponentType<any>;
    CommandItem: React__default.ComponentType<any>;
    CommandList: React__default.ComponentType<any>;
    Badge: React__default.ComponentType<any>;
    Progress: React__default.ComponentType<any>;
    TooltipProvider: React__default.ComponentType<any>;
    Tooltip: React__default.ComponentType<any>;
    TooltipTrigger: React__default.ComponentType<any>;
    TooltipContent: React__default.ComponentType<any>;
    Skeleton: React__default.ComponentType<any>;
    ScrollArea: React__default.ComponentType<any>;
    PhoneInput: React__default.ComponentType<any>;
    InputGroup: React__default.ComponentType<any>;
    InputGroupAddon: React__default.ComponentType<any>;
    InputGroupButton: React__default.ComponentType<any>;
    InputGroupText: React__default.ComponentType<any>;
    InputGroupTextarea: React__default.ComponentType<any>;
    InputRightElement: React__default.ComponentType<any>;
};
type FormConfigContextType = {
    dictionary: FormDictionary;
    components: FormUIComponents;
};
declare function FormConfigProvider({ dictionary, components, children, }: {
    dictionary: Partial<FormDictionary>;
    components: FormUIComponents;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function useFormConfig(): FormConfigContextType | {
    dictionary: FormDictionary;
};

type RHFFormCardProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
    title?: string;
    description?: string;
    children: React.ReactNode;
    show_actions?: boolean;
    loading?: boolean;
};
declare function RHFFormCard<T extends FieldValues>({ form, title, description, onSubmit, children, show_actions, loading, }: RHFFormCardProps<T>): react_jsx_runtime.JSX.Element;

type RHFDialogFormProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
    trigger: string | React.ReactNode;
    title: string;
    description?: string;
    children: React.ReactNode;
    loading?: boolean;
    width?: string;
};
declare function RHFDialogForm<T extends FieldValues>({ form, trigger, title, description, onSubmit, children, loading, width, }: RHFDialogFormProps<T>): react_jsx_runtime.JSX.Element;

type FormSectionProps = {
    title: string;
    children: React.ReactNode;
    endContent?: React.ReactNode;
    className?: string;
};
declare function RHFFormSection({ title, children, endContent, className, }: FormSectionProps): react_jsx_runtime.JSX.Element;

type RHFCheckboxFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    description?: string;
    disabled?: boolean;
    className?: string;
    checkboxClassName?: string;
};
declare function RHFCheckboxField<T extends FieldValues>({ control, name, label, description, disabled, className, checkboxClassName, ...props }: RHFCheckboxFieldProps<T>): react_jsx_runtime.JSX.Element;

type RHFDatePickerFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
};
declare function RHFDatePickerField<T extends FieldValues>({ control, name, label, }: RHFDatePickerFieldProps<T>): react_jsx_runtime.JSX.Element;

type RHFDateRangePickerFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
};
declare function RHFDateRangePickerField<T extends FieldValues>({ control, name, label, }: RHFDateRangePickerFieldProps<T>): react_jsx_runtime.JSX.Element;

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
declare function RHFImageUpload<T extends FieldValues>({ control, name, label, multiple, maxFiles, maxSizeMB, accept, disabled, className, dropzoneClassName, initialUrl, initialUrls, helperText, showCapacityBar, }: RHFImageUploadProps<T>): react_jsx_runtime.JSX.Element;

type RHFInputFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    type?: string;
    className?: string;
};
declare function RHFInputField<T extends FieldValues>({ control, name, label, placeholder, disabled, className, type, }: RHFInputFieldProps<T>): react_jsx_runtime.JSX.Element;

type RHFInternationalPhoneFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    disabled?: boolean;
};
declare function RHFInternationalPhoneField<T extends FieldValues>({ control, name, label, placeholder, disabled, }: RHFInternationalPhoneFieldProps<T>): react_jsx_runtime.JSX.Element;

type RHFPasswordInputFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};
declare function RHFPasswordInputField<T extends FieldValues>({ control, name, label, placeholder, disabled, className, }: RHFPasswordInputFieldProps<T>): react_jsx_runtime.JSX.Element;

type Option$1 = {
    label: string;
    value: string;
    disabled?: boolean;
};
type RHFSelectFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    options?: Option$1[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (value: string) => void;
};
declare function RHFSelectField<T extends FieldValues>({ control, name, label, options, placeholder, disabled, className, onChange, }: RHFSelectFieldProps<T>): react_jsx_runtime.JSX.Element;

type Option = {
    label: string | React.ReactNode;
    value: string;
};
type RHFCreatableSelectFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    options: Option[];
    placeholder?: string;
    addLabel?: (value: string) => string;
    disabled?: boolean;
    className?: string;
    normalize?: (value: string) => string;
};
declare function RHFCreatableSelectField<T extends FieldValues>({ control, name, label, options, placeholder, addLabel, disabled, className, normalize, }: RHFCreatableSelectFieldProps<T>): react_jsx_runtime.JSX.Element;

type RHFSwitchFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    description?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    containerClassName?: string;
    /** Optional callback when value changes */
    onCheckedChange?: (checked: boolean) => void;
};
declare function RHFSwitchField<T extends FieldValues>({ control, name, label, description, disabled, required, className, containerClassName, onCheckedChange, }: RHFSwitchFieldProps<T>): react_jsx_runtime.JSX.Element;

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
declare function RHFTextareaField<T extends FieldValues>({ control, name, label, description, maxLength, placeholder, className, rows, border, }: RHFTextareaFieldProps<T>): react_jsx_runtime.JSX.Element;

type FieldOverrideComponents = Record<string, React.ElementType>;

interface AutoFormProps<T extends FieldValues> {
    schema: z.ZodObject<any, any, any>;
    control: Control<T>;
    fieldOverrides?: FieldOverrideComponents;
    layout?: "stack" | "grid";
    className?: string;
}
declare function AutoForm<T extends FieldValues>({ schema, control, fieldOverrides, layout, className, }: AutoFormProps<T>): react_jsx_runtime.JSX.Element;

export { AutoForm, type AutoFormProps, FormConfigProvider, RHFCheckboxField, RHFCreatableSelectField, RHFDatePickerField, RHFDateRangePickerField, RHFDialogForm, RHFFormCard, RHFFormSection, RHFImageUpload, RHFInputField, RHFInternationalPhoneField, RHFPasswordInputField, RHFSelectField, RHFSwitchField, RHFTextareaField, useFormConfig };
