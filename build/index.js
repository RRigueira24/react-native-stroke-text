import React from "react";
import { requireNativeComponent } from "react-native";
const ComponentName = "StrokeTextView";
const NativeStrokeText = requireNativeComponent(ComponentName);
export const StrokeText = (props) => {
    return <NativeStrokeText {...props}/>;
};
//# sourceMappingURL=index.js.map