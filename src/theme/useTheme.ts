import { useColorScheme } from "react-native";
import { Colors } from "../../constants/colors";

export const useTheme = () => {
    const scheme = useColorScheme() ?? "light";
    return Colors[scheme];
};