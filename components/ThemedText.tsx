import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { useTheme } from '../src/theme/useTheme';

interface ThemedTextProps extends TextProps {
    title?: boolean;
    style?: StyleProp<TextStyle>;
}

const ThemedText = ({ style, title = false, ...props } : ThemedTextProps) => {
    const theme = useTheme();

    const textColor = title ? theme.title : theme.text;

    return (
        <Text
            style={[{ color: textColor }, style]}
            {...props}
        />
    );
}

export default ThemedText