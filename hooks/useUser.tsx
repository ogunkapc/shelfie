import { useContext } from "react";
import { UserContext } from "../src/context/UserContext";

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within UserProvider");
    }

    return context;
}