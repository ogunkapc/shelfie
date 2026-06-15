import { Account, Avatars, Client } from "react-native-appwrite";


const client = new Client()
    // .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("6a0df22c000d5420caa2")
    .setPlatform("com.shelfie.app");

export const account = new Account(client);
export const avatars = new Avatars(client);
