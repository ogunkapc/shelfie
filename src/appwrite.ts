import { Account, Avatars, Client, Databases } from "react-native-appwrite";


export const client = new Client()
    .setProject("6a0df22c000d5420caa2")
    .setPlatform("com.shelfie.app");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
