import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from '../src/theme/useTheme';
import { MaterialIcons } from '@expo/vector-icons';

type IconName = React.ComponentProps<typeof MaterialIcons>["name"];

interface ThemedTextInputProps extends TextInputProps {
    containerStyle?: StyleProp<ViewStyle>; // Optional prop for additional container styles
    inputStyle?: StyleProp<TextStyle>; // Optional prop for additional input styles
    iconName?: IconName; // Optional prop for icon name
    onIconPress?: () => void; // Optional prop for icon press event
}

const ThemedTextInput = ({ 
    containerStyle,
    inputStyle, 
    iconName,
    onIconPress,
    ...props 
} : ThemedTextInputProps) => {
    const theme = useTheme();

    return (
        <View style={[styles.textInputContainer, containerStyle]}>
            <TextInput
                style={[
                    styles.textInput,
                    { backgroundColor: theme.uiBackground, color: theme.text, },
                    inputStyle
                ]}
                placeholderTextColor={"gray"}
                {...props}
            />
            {iconName && (
                <MaterialIcons
                    name={iconName}
                    size={24} 
                    color="gray" 
                    style={styles.icon}
                    onPress={onIconPress}  
                />
            )}
        </View>
    );
}

export default ThemedTextInput

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    textInput: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    icon: {
        position: "absolute",
        right: 10,
    },
});