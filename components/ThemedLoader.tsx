import { ActivityIndicator, ColorValue } from "react-native";
import { useTheme } from "../src/theme/useTheme"

interface ThemedLoaderProps {
    size?: "small" | "large" | number;
    color?: ColorValue;
}

const  ThemedLoader = ({ size, color, ...props} : ThemedLoaderProps) => {
    const theme = useTheme();
    const loaderColor = color || theme.text;

    return (
        <ActivityIndicator size={size} color={loaderColor} {...props} />
    );
}

export default ThemedLoader;