import { createContext, useEffect, useState } from "react";
import { account } from "../appwrite";
import { ID } from "react-native-appwrite";

type User = {
    $id: string;
    email: string;
} | null;

type UserContextType = {
    user: User;
    loading: boolean;
    authChecked: boolean;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider( {children} : { children: React.ReactNode} ) {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);

    async function register(email: string, password: string) {
        setLoading(true);
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error: any) {
            throw Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function login(email: string, password: string) {
        setLoading(true);
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        } catch (error: any) {
            throw Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function logout() {
        setLoading(true);
        try {
            await account.deleteSession("current");
            setUser(null);
        } catch (error) {
            console.log("Error logging out user:", error);
        } finally {
            setLoading(false);
        }
    }

    async function getInitialUser() {
        setLoading(true);
        try {
            const response = await account.get();
            setUser(response);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        getInitialUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, authChecked, register, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}