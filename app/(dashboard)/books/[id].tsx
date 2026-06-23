import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'

import Spacer from '../../../components/Spacer'
import ThemedButton from '../../../components/ThemedButton'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoadingScreen from '../../../components/ThemedLoadingScreen'
import { Colors } from '../../../constants/colors'
import { useBooks } from '../../../hooks/useBooks'
import { Book } from '../../../src/models/books'

const BookDetails = () => {
    const [book, setBook] = useState<Book | null>(null);

    const { fetchBookById, loading, deleteBook } = useBooks();
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const handleDelete = async () => {
        if (!id) return;
        await deleteBook(id as string);
        setBook(null);
        router.replace('/Books');
    }

    useEffect(() => {
        if (id) {
            const getBook = async () => {
                const bookData = await fetchBookById(id as string);
                setBook(bookData);
            }

            getBook();
        } else {
            setBook(null);
        }
    }, [id]);

    if (loading) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoadingScreen />
            </ThemedView>
        );
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{book?.title}</ThemedText>
                <ThemedText>Written by {book?.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book descriptions:</ThemedText>
                <Spacer height={10} />

                <ThemedText>{book?.description}</ThemedText>
            </ThemedCard>
            <ThemedButton style={styles.deleteButton} onPress={handleDelete}>
                <Text style={{ color: "#fff", textAlign: "center" }}>Delete Book</Text>
            </ThemedButton>
        </ThemedView>
    );
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    card: {
        margin: 20,
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    deleteButton: {
        backgroundColor: Colors.warning,
        marginTop: 40,
        width: 200,
        alignSelf: "center",
        padding: 15,
        borderRadius: 6,
    }
})