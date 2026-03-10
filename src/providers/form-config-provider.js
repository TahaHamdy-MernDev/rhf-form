import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
const defaultDictionary = {
    cancel: "Cancel",
    save: "Save",
    search_or_type: "Search or type...",
    no_results: "No results found",
};
const FormConfigContext = createContext(null);
export function FormConfigProvider({ dictionary, components, children, }) {
    return (_jsx(FormConfigContext.Provider, { value: {
            dictionary: { ...defaultDictionary, ...dictionary },
            components,
        }, children: children }));
}
export function useFormConfig() {
    const context = useContext(FormConfigContext);
    if (!context)
        return { dictionary: defaultDictionary };
    return context;
}
export function useFormUI() {
    const context = useContext(FormConfigContext);
    if (!context?.components) {
        throw new Error("UI components are missing. Please wrap your application with <FormConfigProvider components={{...}}> and provide all required UI primitives.");
    }
    return context.components;
}
