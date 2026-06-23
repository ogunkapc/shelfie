import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useBooks } from '../../hooks/useBooks';

import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedText from '../../components/ThemedText';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedView from '../../components/ThemedView';

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { createBook, loading } = useBooks();
  const router = useRouter();

  const handleSubmit = async () => {
    // Basic validation for empty fields
    if (!title.trim() || !author.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    await createBook({ title, author, description })
      .then(() => {
        alert("Book created successfully!");
        router.replace("/Books");
      })
      .catch((error) => {
        alert(`Failed to create book: ${error.message}`);
      })
      .finally(() => {
        setTitle("");
        setAuthor("");
        setDescription("");
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
          Add a New Book
        </ThemedText>
        <Spacer />
        <ThemedTextInput
          inputStyle={styles.input}
          placeholder="Book Title"
          value={title}
          onChangeText={setTitle}
        />
        <Spacer />
        <ThemedTextInput
          inputStyle={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <Spacer />
        <ThemedTextInput
          inputStyle={styles.multilineInput}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Spacer />
        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: "#f2f2f2" }}>
            {loading ? "Creating..." : "Create Book"}
          </Text>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18
  },
  input: {
    marginHorizontal: 40,
    padding: 20,
    borderRadius: 6,
    alignSelf: "stretch",
  },
  multilineInput: {
    padding: 20,
    borderRadius: 6,
    marginHorizontal: 40,
    alignSelf: "stretch",
    minHeight: 100,
  }
});