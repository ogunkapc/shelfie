import { StyleSheet, Text, View } from 'react-native'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Create = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
            Add a New Book
        </ThemedText>
    </ThemedView>
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
});