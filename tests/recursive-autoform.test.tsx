import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { AutoForm } from "../src/auto-form/auto-form";
import { FormConfigProvider } from "../src/providers/form-config-provider";
import * as React from "react";

const mockComponents = {
  Input: ({ label, name }: any) => <div data-testid={`input-${name}`}>{label}</div>,
  Checkbox: ({ label, name }: any) => <div data-testid={`checkbox-${name}`}>{label}</div>,
  Select: ({ label, name }: any) => <div data-testid={`select-${name}`}>{label}</div>,
  Field: ({ children }: any) => <div>{children}</div>,
  FieldLabel: ({ children }: any) => <label>{children}</label>,
  FieldError: () => null,
  InputGroup: ({ children }: any) => <div>{children}</div>,
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

function NestedForm({ layout }: { layout?: "inline" | "section" }) {
  const schema = z.object({
    user: z.object({
      name: z.string().describe("User Name"),
      address: z.object({
        city: z.string().describe("City"),
      }).describe("Address Info"),
    }).describe("User Info"),
  });

  const form = useForm({
    defaultValues: {
      user: { name: "", address: { city: "" } },
    },
  });

  return (
    <FormConfigProvider components={mockComponents as any}>
      <AutoForm schema={schema} control={form.control} subObjectLayout={layout} />
    </FormConfigProvider>
  );
}

describe("Recursive AutoForm", () => {
  it("should render deeply nested fields with correct paths", () => {
    render(<NestedForm layout="inline" />);
    
    expect(screen.getByTestId("input-user.name")).toBeDefined();
    expect(screen.getByTestId("input-user.address.city")).toBeDefined();
    expect(screen.getByText("User Name")).toBeDefined();
    expect(screen.getByText("City")).toBeDefined();
  });

  it("should support section layout for nested objects", () => {
    // In our mock, RHFFormSection doesn't do much, but we can verify it doesn't crash 
    // and we can potentially check if titles are rendered twice (once as section title, once in fields)
    render(<NestedForm layout="section" />);
    
    expect(screen.getByTestId("input-user.name")).toBeDefined();
    expect(screen.getByTestId("input-user.address.city")).toBeDefined();
    
    // Check for section titles (from .describe())
    expect(screen.getByText("User Info")).toBeDefined();
    expect(screen.getByText("Address Info")).toBeDefined();
  });
});
