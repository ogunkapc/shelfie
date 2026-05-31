import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const login = () => {
    const handleLogin = () => {
        console.log('Login button pressed');
    };
    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to your Account
            </ThemedText>

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
    );
}

export default login

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