import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const register = () => {
    const handleRegister = () => {
        console.log('Register button pressed');
    };
    
    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Create an account
            </ThemedText>

            <ThemedButton onPress={handleRegister}>
                <Text style={{color: "#f2f2f2"}}>Register</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href='/login'>
                <ThemedText style={{ textAlign: 'center'}}>Already have an account? Login</ThemedText>
            </Link>

        </ThemedView>
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