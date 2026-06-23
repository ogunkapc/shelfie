import { Models } from "react-native-appwrite";

//! Book model type definition
export type Book = Models.Document & {
  title: string;
  author: string;
  description: string;
  userId: string;
};
//! Create Book Model type definition
export type CreateBookPayload = {
  title: string;
  author: string;
  description: string;
};
