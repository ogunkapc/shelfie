import { createContext, useEffect, useState } from "react";
import { ID, Permission, Query, Role } from "react-native-appwrite";

import { useUser } from "../../hooks/useUser";

import { databases } from "../appwrite";
import { BOOKS_TABLE_ID, DATABASE_ID } from "../../constants/constants";
import { Book, CreateBookPayload } from "../models/books";

type BooksContextType = {
    books: Book[];
    loading: boolean;
    fetchBooks: () => Promise<void>;
    fetchBookById: (bookId: string) => Promise<void>;
    createBook: (data: CreateBookPayload) => Promise<void>;
    deleteBook: (bookId: string) => Promise<void>;
}

export const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({ children } : { children: React.ReactNode}) {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const { user} = useUser();

    //! Fetch all books from the database
    async function fetchBooks() {
        if (!user?.$id) {
            throw new Error("User must be authenticated to fetch books.");
        };
        setLoading(true);
        try {
            const response = await databases.listDocuments<Book>(
                DATABASE_ID,
                BOOKS_TABLE_ID,
                [
                    Query.equal("userId", user?.$id || "")
                ]
            );
            setBooks(response.documents);
            console.log(`Fetched ${response.documents.length} books for user ${user?.$id}`);
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
    async function createBook(data: CreateBookPayload) {
        // If user id is not available, we cannot create a book
        if (!user?.$id) {
            throw new Error("User must be authenticated to create a book.");
        }
        setLoading(true);
        try {
            const newBook = await databases.createDocument<Book>(
                DATABASE_ID,
                BOOKS_TABLE_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            );
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

    // On app load, fetch the books for the authenticated user
    useEffect(() => {
        if (user) {
            fetchBooks();
        } else {
            setBooks([]);
        }
    }, [user]);

    return (
        <BooksContext.Provider value={{ books, loading, fetchBooks, fetchBookById, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    );
}