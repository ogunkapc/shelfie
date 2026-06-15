import { StyleProp, TextInput, TextInputProps, ViewStyle } from 'react-native';
import { useTheme } from '../src/theme/useTheme';

interface ThemedTextInputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
}

const ThemedTextInput = ({ style, ...props } : ThemedTextInputProps) => {
    const theme = useTheme();

    return (
        <TextInput
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    padding: 20,
                    borderRadius: 6,
                },
                style
            ]}
            {...props}
        />
    );
}

export default ThemedTextInput