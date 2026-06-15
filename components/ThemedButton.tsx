import { Pressable, StyleSheet, PressableProps, ViewStyle, StyleProp } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors';

interface ThemedButtonProps extends PressableProps {
    style?: StyleProp<ViewStyle>;
}

function ThemedButton({style, ...props} : ThemedButtonProps) {
    return (
        <Pressable
            style={({pressed}) => [styles.button, pressed && styles.buttonPressed, style]}
            {...props}
        />
    );
}

export default ThemedButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 6,
        padding: 18,
        marginVertical: 10,
    },
    buttonPressed: {
        opacity: 0.5,
    }
});