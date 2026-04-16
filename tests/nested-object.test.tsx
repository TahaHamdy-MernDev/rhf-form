import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { AutoForm } from "../src/auto-form/auto-form";
import { FormConfigProvider } from "../src/providers/form-config-provider";
import * as React from "react";

const Input = ({ label, ...props }: any) => (
  <div>
    <label>{label}</label>
    <input {...props} />
  </div>
);

const Checkbox = ({ label }: any) => (
  <div>
    <label>{label}</label>
    <input type="checkbox" />
  </div>
);

const Select = ({ label, options }: any) => (
  <div>
    <label>{label}</label>
    <select>
      {options?.map((opt: any) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const Field = ({ children }: any) => <div>{children}</div>;
const FieldLabel = ({ children }: any) => <label>{children}</label>;
const FieldError = () => null;
const InputGroup = ({ children }: any) => <div>{children}</div>;

const mockComponents = {
  Input,
  Checkbox,
  Select,
  Field,
  FieldLabel,
  FieldError,
  InputGroup,
  Button: () => null,
  Card: ({ children }: any) => <div>{children}</div>,
  CardHeader: ({ children }: any) => <div>{children}</div>,
  CardTitle: ({ children }: any) => <div>{children}</div>,
  CardDescription: ({ children }: any) => <div>{children}</div>,
  CardContent: ({ children }: any) => <div>{children}</div>,
  CardFooter: ({ children }: any) => <div>{children}</div>,
  Switch: () => null,
  Textarea: () => null,
  Popover: ({ children }: any) => <div>{children}</div>,
  PopoverTrigger: ({ children }: any) => <div>{children}</div>,
  PopoverContent: ({ children }: any) => <div>{children}</div>,
  Calendar: () => null,
  Badge: () => null,
  Tooltip: ({ children }: any) => <div>{children}</div>,
  TooltipTrigger: ({ children }: any) => <div>{children}</div>,
  TooltipContent: ({ children }: any) => <div>{children}</div>,
  ScrollArea: ({ children }: any) => <div>{children}</div>,
  Progress: () => null,
  PhoneInput: () => null,
  Command: ({ children }: any) => <div>{children}</div>,
  CommandInput: () => null,
  CommandList: ({ children }: any) => <div>{children}</div>,
  CommandEmpty: ({ children }: any) => <div>{children}</div>,
  CommandGroup: ({ children }: any) => <div>{children}</div>,
  CommandItem: ({ children }: any) => <div>{children}</div>,
  Dialog: ({ children }: any) => <div>{children}</div>,
  DialogTrigger: ({ children }: any) => <div>{children}</div>,
  DialogContent: ({ children }: any) => <div>{children}</div>,
  DialogHeader: ({ children }: any) => <div>{children}</div>,
  DialogTitle: ({ children }: any) => <div>{children}</div>,
  DialogDescription: ({ children }: any) => <div>{children}</div>,
  DialogFooter: ({ children }: any) => <div>{children}</div>,
  DialogClose: ({ children }: any) => <div>{children}</div>,
  FieldGroup: ({ children }: any) => <div>{children}</div>,
  InputGroupAddon: ({ children }: any) => <div>{children}</div>,
  InputGroupButton: ({ children }: any) => <div>{children}</div>,
};

function TestForm() {
  const schema = z.object({
    personalInfo: z.object({
      fullName: z.string().describe("Full Name"),
    }),
  });

  const form = useForm({
    defaultValues: {
      personalInfo: { fullName: "" },
    },
  });

  return (
    <FormConfigProvider components={mockComponents as any}>
      <AutoForm schema={schema} control={form.control} />
    </FormConfigProvider>
  );
}

describe("AutoForm with nested objects", () => {
  it("should not crash when encountering a nested object", () => {
    expect(() => render(<TestForm />)).not.toThrow();
  });
});
