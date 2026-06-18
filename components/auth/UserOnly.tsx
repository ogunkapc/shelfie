import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

const UserOnly = ({ children } : { children: React.ReactNode }) => {
    const {user, authChecked} = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user === null) {
            router.replace("/Login");
        }
    }, 
    // Tells the app to re-run the functions in this hook when the user or authChecked state changes
    [user, authChecked]);

    if (!authChecked || !user) {
        return <Text>Loading...</Text>;
    }

    return children; 
}

export default UserOnly;