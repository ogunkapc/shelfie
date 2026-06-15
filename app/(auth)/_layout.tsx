import { Stack } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
    const { user } = useUser();
    console.log('User in AuthLayout: ', user);
    
    return (
        <>
            <StatusBar style="auto" />
            <Stack
                screenOptions={{headerShown: false, animation: "none"}}
            />
        </>
    );
}