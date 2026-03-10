import React, { createContext, useContext, ReactNode } from "react";

export type FormDictionary = {
  cancel: string;
  save: string;
  search_or_type: string;
  no_results: string;
};

export type FormUIComponents = {
  // Primitives
  Input: React.ComponentType<any>;
  Textarea: React.ComponentType<any>;
  Select: React.ComponentType<any>;
  SelectTrigger: React.ComponentType<any>;
  SelectValue: React.ComponentType<any>;
  SelectContent: React.ComponentType<any>;
  SelectItem: React.ComponentType<any>;
  Switch: React.ComponentType<any>;
  Checkbox: React.ComponentType<any>;
  Button: React.ComponentType<any>;

  // Layout & Cards
  Card: React.ComponentType<any>;
  CardHeader: React.ComponentType<any>;
  CardTitle: React.ComponentType<any>;
  CardDescription: React.ComponentType<any>;
  CardContent: React.ComponentType<any>;
  CardFooter: React.ComponentType<any>;

  // Dialog
  Dialog: React.ComponentType<any>;
  DialogTrigger: React.ComponentType<any>;
  DialogClose: React.ComponentType<any>;
  DialogContent: React.ComponentType<any>;
  DialogHeader: React.ComponentType<any>;
  DialogTitle: React.ComponentType<any>;
  DialogDescription: React.ComponentType<any>;
  DialogFooter: React.ComponentType<any>;

  // Layouts
  Separator: React.ComponentType<any>;

  // Form wrappers
  Field: React.ComponentType<any>;
  FieldGroup: React.ComponentType<any>;
  FieldLabel: React.ComponentType<any>;
  FieldDescription: React.ComponentType<any>;
  FieldError: React.ComponentType<any>;
  Label: React.ComponentType<any>;

  // Others
  Popover: React.ComponentType<any>;
  PopoverTrigger: React.ComponentType<any>;
  PopoverContent: React.ComponentType<any>;
  Calendar: React.ComponentType<any>;
  Command: React.ComponentType<any>;
  CommandInput: React.ComponentType<any>;
  CommandEmpty: React.ComponentType<any>;
  CommandGroup: React.ComponentType<any>;
  CommandItem: React.ComponentType<any>;
  CommandList: React.ComponentType<any>;
  Badge: React.ComponentType<any>;
  Progress: React.ComponentType<any>;
  TooltipProvider: React.ComponentType<any>;
  Tooltip: React.ComponentType<any>;
  TooltipTrigger: React.ComponentType<any>;
  TooltipContent: React.ComponentType<any>;
  Skeleton: React.ComponentType<any>;
  ScrollArea: React.ComponentType<any>;
  PhoneInput: React.ComponentType<any>;
  InputGroup: React.ComponentType<any>;
  InputGroupAddon: React.ComponentType<any>;
  InputGroupButton: React.ComponentType<any>;
  InputGroupText: React.ComponentType<any>;
  InputGroupTextarea: React.ComponentType<any>;
  InputRightElement: React.ComponentType<any>;
};

type FormConfigContextType = {
  dictionary: FormDictionary;
  components: FormUIComponents;
};

const defaultDictionary: FormDictionary = {
  cancel: "Cancel",
  save: "Save",
  search_or_type: "Search or type...",
  no_results: "No results found",
};

const FormConfigContext = createContext<FormConfigContextType | null>(null);

export function FormConfigProvider({
  dictionary,
  components,
  children,
}: {
  dictionary: Partial<FormDictionary>;
  components: FormUIComponents;
  children: ReactNode;
}) {
  return (
    <FormConfigContext.Provider
      value={{
        dictionary: { ...defaultDictionary, ...dictionary },
        components,
      }}
    >
      {children}
    </FormConfigContext.Provider>
  );
}

export function useFormConfig() {
  const context = useContext(FormConfigContext);
  if (!context) return { dictionary: defaultDictionary };
  return context;
}

export function useFormUI() {
  const context = useContext(FormConfigContext);
  if (!context?.components) {
    throw new Error(
      "UI components are missing. Please wrap your application with <FormConfigProvider components={{...}}> and provide all required UI primitives.",
    );
  }
  return context.components;
}
