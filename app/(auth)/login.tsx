import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { login } = useUser();

    const handleLogin = async () => {
        try {
            await login(email, password);
        } catch (error) {
            console.error('Login failed: ', error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Login to your Account
                </ThemedText>
                <ThemedTextInput
                    containerStyle = {{width: "80%", marginBottom: 20}}
                    placeholder = 'Enter your email address'
                    keyboardType = "email-address"
                    onChangeText = {setEmail}
                    value={email}
                    
                />
                <ThemedTextInput
                    containerStyle = {{width: "80%", marginBottom: 20}}
                    placeholder = 'Password'
                    secureTextEntry={!showPassword}
                    iconName={showPassword ? "visibility" : "visibility-off"}
                    onIconPress={() => setShowPassword(!showPassword)}
                    onChangeText = {setPassword}
                    value={password}
                />
                <ThemedButton onPress={handleLogin}>
                    <Text style={{color: "#f2f2f2"}}>Login</Text>
                </ThemedButton>
                <Spacer height={100} />
                <Link href='/register'>
                    <ThemedText style={{ textAlign: 'center'}}>
                        Don't have an account? Register
                    </ThemedText>
                </Link>

            </ThemedView>
        </TouchableWithoutFeedback>
    );
}

export default Login;

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