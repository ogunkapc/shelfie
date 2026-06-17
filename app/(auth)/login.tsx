import { ActivityIndicator, Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'
import { Colors } from '../../constants/colors'

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { login, loading } = useUser();

    const handleLogin = async () => {
        setError(null);
        try {
            await login(email, password);
        } catch (error: any) {
            setError(error.message);
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

                <ThemedButton onPress={handleLogin} >
                    {loading
                        ? (
                            <ActivityIndicator />
                        ) : (
                            <Text style={{ color: "#f2f2f2" }}>Login</Text>
                        )}
                </ThemedButton>

                <Spacer />
                {error && (
                    <Text style={styles.error}>{error}</Text>
                )}

                <Spacer height={100} />
                <Link href='/Register'>
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
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: "#f5c1c8",
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    },
});