import { createContext, useState } from "react";
import { account } from "../appwrite";
import { ID } from "react-native-appwrite";

type User = {
    $id: string;
    email: string;
} | null;

type UserContextType = {
    user: User;
    loading: boolean;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider( {children} : { children: React.ReactNode} ) {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(false);

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

    return (
        <UserContext.Provider value={{ user, loading, register, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}