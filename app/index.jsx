import { StyleSheet} from 'react-native'
import { Link } from "expo-router"

import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />
            <Spacer height={20}/>

            <ThemedText title={true} style={styles.title}>Shelfie</ThemedText>
            <Spacer height={10}/>

            <Link href="/login" style={styles.link}>
                <ThemedText>Login</ThemedText>
            </Link>
            <Link href="/register" style={styles.link}>
                <ThemedText>Sign Up</ThemedText>
            </Link> 
            <Link href="/profile" style={styles.link}>
                <ThemedText>Profile</ThemedText>
            </Link> 
        </ThemedView>
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
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})