import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'

const register = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const { register } = useUser();

    const handleRegister = async () => {
        console.log('Register form submitted with credentials: ', email, password, confirmPassword);
        try {
            await register(email, password);
        } catch (error) {
            console.error('Registration failed: ', error);
        }
    };
    
    return ( 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Create an account
                </ThemedText>
                <ThemedTextInput
                    containerStyle = {{width: "90%", marginBottom: 20}}
                    placeholder = 'Enter your email address'
                    keyboardType = "email-address"
                    onChangeText = {setEmail}
                    value={email}
                />
                <ThemedTextInput
                    containerStyle = {{width: "90%", marginBottom: 20}}
                    placeholder = 'Password'
                    onChangeText = {setPassword}
                    value={password}
                    secureTextEntry
                />
                <ThemedTextInput
                    containerStyle = {{width: "90%", marginBottom: 20}}
                    placeholder = 'Confirm Password'
                    onChangeText = {setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry
                />
                <ThemedButton onPress={handleRegister}>
                    <Text style={{color: "#f2f2f2"}}>Register</Text>
                </ThemedButton>
                <Spacer height={100} />
                <Link href='/login'>
                    <ThemedText style={{ textAlign: 'center'}}>Already have an account? Login</ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
}

export default register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
});