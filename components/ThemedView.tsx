import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../src/theme/useTheme";

interface ThemedViewProps {
    style?: StyleProp<ViewStyle>;
    safe?: boolean;
    children: React.ReactNode;
}

const ThemedView = ({ style, safe = false, children, ...props } : ThemedViewProps) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    const paddingStyle = safe
        ? {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }
        : {};

    return (
        <View
            style={[{ backgroundColor: theme.background }, paddingStyle, style,]}
            {...props}
        >
            {children}
        </View>
    );
};

export default ThemedView;
