import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

const GuestOnly = ({ children }: { children: React.ReactNode }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect (() => {
        // If the authentication check is complete and the user is not null, redirect to the Profile page
        if (authChecked && user !== null) {
            router.replace("/Profile");
        }
    }, 
    // Tells the app to re-run the functions in this hook when the user or authChecked state changes
    [user, authChecked]);

    // If the authentication check is not complete or the user is authenticated, show a loading message
    if (!authChecked || user) {
        return <Text>Loading...</Text>;
    }

    return children;

}

export default GuestOnly;