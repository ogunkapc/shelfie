import { createContext, useState } from "react";
import { databases } from "../appwrite";
import { BOOKS_TABLE_ID, DATABASE_ID } from "../../constants/constants";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../../hooks/useUser";

type Book = {
    $id: string;
    title: string;
    author: string;
    description: string;
} | null;

type BooksContextType = {
    books: Book[];
    loading: boolean;
    fetchBooks: () => Promise<void>;
    fetchBookById: (bookId: string) => Promise<void>;
    createBook: (data: object) => Promise<void>;
    deleteBook: (bookId: string) => Promise<void>;
}

export const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({ children } : { children: React.ReactNode}) {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const { user} = useUser();

    //! Fetch all books from the database
    async function fetchBooks() {
        setLoading(true);
        try {
            
        } catch (error: any) {
            throw Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    //! Fetch a single book by its ID
    async function fetchBookById(bookId: string) {
        setLoading(true);
        try {
            
        } catch (error: any) { 
            throw Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    //! Create a new book in the database
    async function createBook(data: object) {
        setLoading(true);
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                BOOKS_TABLE_ID,
                ID.unique(),
                {...data, userId: user?.$id},
                [
                    Permission.read(Role.user(user?.$id || "")),
                    Permission.update(Role.user(user?.$id || "")),
                    Permission.delete(Role.user(user?.$id || "")),
                ]
            )
        } catch (error: any) {
            throw Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    //! Delete a book by its ID
    async function deleteBook(bookId: string) {
        setLoading(true);
        try {
            
        } catch (error: any) {
            throw Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <BooksContext.Provider value={{ books, loading, fetchBooks, fetchBookById, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    );
}