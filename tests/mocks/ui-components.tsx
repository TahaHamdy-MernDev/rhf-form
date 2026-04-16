import React from "react";

export const MockInput = (props: any) => <input data-testid="mock-input" {...props} />;
export const MockLabel = ({ children, htmlFor }: any) => <label data-testid="mock-label" htmlFor={htmlFor}>{children}</label>;
export const MockError = ({ errors }: any) => (
  <span data-testid="mock-error">{errors?.[0]?.message}</span>
);
export const MockField = ({ children }: any) => <div data-testid="mock-field">{children}</div>;
export const MockInputGroup = ({ children }: any) => <div data-testid="mock-input-group">{children}</div>;
export const MockCheckbox = ({ onCheckedChange, value, checked, ...props }: any) => (
  <input
    type="checkbox"
    data-testid="mock-checkbox"
    {...props}
    checked={checked ?? !!value}
    onChange={(e) => onCheckedChange?.(e.target.checked)}
  />
);
export const MockSelect = ({ options, onValueChange, value, ...props }: any) => (
  <select
    data-testid="mock-select"
    {...props}
    value={value}
    onChange={(e) => onValueChange?.(e.target.value)}
  >
    <option value="">Select...</option>
    {options?.map((opt: any) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);
export const MockButton = (props: any) => <button data-testid="mock-button" {...props} />;

export const mockComponents = {
  Input: MockInput,
  Textarea: MockInput,
  Select: MockSelect,
  SelectTrigger: ({ children }: any) => <div>{children}</div>,
  SelectValue: ({ children }: any) => <div>{children}</div>,
  SelectContent: ({ children }: any) => <div>{children}</div>,
  SelectItem: ({ children }: any) => <div>{children}</div>,
  Switch: MockCheckbox,
  Checkbox: MockCheckbox,
  Button: MockButton,
  Field: MockField,
  FieldGroup: MockField,
  FieldLabel: MockLabel,
  FieldDescription: MockLabel,
  FieldError: MockError,
  Label: MockLabel,
  InputGroup: MockInputGroup,
} as any;
