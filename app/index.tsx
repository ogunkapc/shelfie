import { Link } from "expo-router"
import { StyleSheet } from 'react-native'

import Spacer from '../components/Spacer'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import GuestOnly from '../components/auth/GuestOnly'

const Home = () => {
    return (
        <GuestOnly>
            <ThemedView style={styles.container}>
                <ThemedLogo />
                <Spacer height={20} />

                <ThemedView style={styles.linkContainer}>
                    <Link href="/Login" style={styles.link}>
                        <ThemedText>Login</ThemedText>
                    </Link>
                    <Link href="/Register" style={styles.link}>
                        <ThemedText>Sign Up</ThemedText>
                    </Link>
                    <Link href="/Profile" style={styles.link}>
                        <ThemedText>Profile</ThemedText>
                    </Link>
                </ThemedView>
            </ThemedView>
        </GuestOnly>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    img: {
        marginVertical: 20,
    },
    card: {
        backgroundColor: "#eee",
        borderRadius: 10,
        padding: 10,
        boxShadow: "4px 4px rgba(0,0,0,0.1)",
    },
    link: {
        borderBottomWidth: 1,
    },
    linkContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",

    }
})