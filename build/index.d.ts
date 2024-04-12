import React from "react";
export interface StrokeTextProps {
    text: string;
    fontSize?: number;
    color?: string;
    strokeColor?: string;
    strokeWidth?: number;
    fontFamily?: string;
}
export declare const StrokeText: (props: StrokeTextProps) => React.JSX.Element;
