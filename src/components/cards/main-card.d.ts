import * as React from "react";
type Props = {
    title: string;
    right?: string | React.ReactNode;
    description?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    classes?: {
        card?: string;
        header?: string;
        content?: string;
        footer?: string;
    };
    with_hover?: boolean;
};
declare function MainCard({ title, description, right, children, footer, classes, with_hover, }: Props): import("react/jsx-runtime").JSX.Element;
export default MainCard;
//# sourceMappingURL=main-card.d.ts.map