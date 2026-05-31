import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors';

function ThemedButton({style, ...props}) {
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