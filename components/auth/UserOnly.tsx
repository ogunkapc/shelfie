import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";
import ThemedLoadingScreen from "../ThemedLoadingScreen";

const UserOnly = ({ children } : { children: React.ReactNode }) => {
    const {user, authChecked} = useUser();
    const router = useRouter();

    useEffect(() => {
        // If  authentication check is complete and the user is not authenticated, redirect to the Login page
        if (authChecked && user === null) {
            router.replace("/Login");
        }
    }, 
    // Tells the app to re-run the functions in this hook when the user or authChecked state changes
    [user, authChecked]);

    // If the authentication check is not complete or the user is not authenticated, show a loading message
    if (!authChecked || !user) {
        return <ThemedLoadingScreen />;
    }

    return children; 
}

export default UserOnly;