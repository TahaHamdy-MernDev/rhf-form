import { z } from "zod";
import * as React from "react";
import { FieldOverrideComponents } from "./zod-field-mapper";
export declare function resolveFieldInfo(path: string, zodType: z.ZodTypeAny, overrides?: FieldOverrideComponents): {
    Component: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
    props: {
        options?: any;
        label: string;
    };
};
//# sourceMappingURL=field-resolver.d.ts.map