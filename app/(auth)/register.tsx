import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'
import { Colors } from '../../constants/colors'

const Register = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const { register } = useUser();

    // validate that password and confirm password match before calling register function
    function checkPasswordsMatch() {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return false;
        }
        return true;
    }

    const handleRegister = async () => {
        setError(null);
        if (!checkPasswordsMatch()) {
            return;
        }
        try {
            await register(email, password);
        } catch (error: any) {
            setError(error.message);
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
                    containerStyle={{ width: "90%", marginBottom: 20 }}
                    placeholder='Enter your email address'
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />
                <ThemedTextInput
                    containerStyle={{ width: "90%", marginBottom: 20 }}
                    placeholder='Password'
                    secureTextEntry={!showPassword}
                    iconName={showPassword ? "visibility" : "visibility-off"}
                    onIconPress={() => setShowPassword(!showPassword)}
                    onChangeText={setPassword}
                    value={password}
                />
                <ThemedTextInput
                    containerStyle={{ width: "90%", marginBottom: 20 }}
                    placeholder='Confirm Password'
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={!showConfirmPassword}
                    iconName={showConfirmPassword ? "visibility" : "visibility-off"}
                    onIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
                <ThemedButton onPress={handleRegister}>
                    <Text style={{ color: "#f2f2f2" }}>Register</Text>
                </ThemedButton>

                <Spacer />
                {error && (
                    <Text style={styles.error}>{error}</Text>
                )}

                <Spacer height={100} />
                <Link href='/Login'>
                    <ThemedText style={{ textAlign: 'center' }}>Already have an account? Login</ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
}

export default Register

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