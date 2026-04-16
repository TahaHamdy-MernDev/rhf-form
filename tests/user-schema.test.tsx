import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { AutoForm } from "../src/auto-form/auto-form";
import { FormConfigProvider } from "../src/providers/form-config-provider";
import * as React from "react";

const Input = ({ label }: any) => <div>{label}</div>;
const Checkbox = ({ label }: any) => <div>{label}</div>;
const Select = ({ label, options }: any) => (
  <div>
    {label}
    {options?.map((o: any) => o.label)}
  </div>
);
const Field = ({ children }: any) => <div>{children}</div>;
const FieldLabel = ({ children }: any) => <label>{children}</label>;
const FieldError = () => null;
const InputGroup = ({ children }: any) => <div>{children}</div>;

const mockComponents = {
  Input, Checkbox, Select, Field, FieldLabel, FieldError, InputGroup,
  Button: () => null, Card: ({ children }: any) => <div>{children}</div>,
  CardHeader: ({ children }: any) => <div>{children}</div>,
  CardTitle: ({ children }: any) => <div>{children}</div>,
  CardDescription: ({ children }: any) => <div>{children}</div>,
  CardContent: ({ children }: any) => <div>{children}</div>,
  CardFooter: ({ children }: any) => <div>{children}</div>,
  Switch: () => null, Textarea: () => null, Popover: ({ children }: any) => <div>{children}</div>,
  PopoverTrigger: ({ children }: any) => <div>{children}</div>,
  PopoverContent: ({ children }: any) => <div>{children}</div>,
  Calendar: () => null, Badge: () => null, Tooltip: ({ children }: any) => <div>{children}</div>,
  TooltipTrigger: ({ children }: any) => <div>{children}</div>,
  TooltipContent: ({ children }: any) => <div>{children}</div>,
  ScrollArea: ({ children }: any) => <div>{children}</div>,
  Progress: () => null, PhoneInput: () => null, Command: ({ children }: any) => <div>{children}</div>,
  CommandInput: () => null, CommandList: ({ children }: any) => <div>{children}</div>,
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

function RegistrationDemo() {
  const registrationSchema = z.object({
    personalInfo: z.object({
      fullName: z.string().min(2, "Name is too short").describe("Full Name"),
      email: z.string().email("Invalid email address").describe("Email Address"),
    }).describe("Personal Details"),
    
    accountDetails: z.object({
      username: z.string().min(3).describe("Username"),
      password: z.string().min(8).describe("Password"),
      accountType: z.enum(["personal", "business", "enterprise"]).describe("Account Type"),
    }).describe("Account Settings"),
    
    bio: z.string().optional().describe("Biography"),
    
    preferences: z.object({
      marketing: z.boolean().default(false).describe("Receive marketing emails"),
      newsletter: z.boolean().default(true).describe("Subscribe to newsletter"),
    }).describe("Communication Preferences"),
    
    birthday: z.date().optional().describe("Date of Birth"),
  });

  const form = useForm({
    defaultValues: {
      personalInfo: { fullName: "", email: "" },
      accountDetails: { username: "", password: "", accountType: "personal" as any },
      preferences: { marketing: false, newsletter: true },
    },
  });

  return (
    <FormConfigProvider components={mockComponents as any}>
      <AutoForm
        schema={registrationSchema}
        control={form.control}
      />
    </FormConfigProvider>
  );
}

describe("AutoForm with User Schema", () => {
  it("should not crash", () => {
    expect(() => render(<RegistrationDemo />)).not.toThrow();
  });
});
