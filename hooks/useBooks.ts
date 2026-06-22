import { useContext } from "react";
import { BooksContext } from "../src/contexts/BooksContext";

export function useBooks() {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error("useBooks must be used within BooksProvider");
    }

    return context;
}