import { StyleSheet } from 'react-native'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'


const books = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
            Your Reading List
        </ThemedText>
    </ThemedView>
  );
}

export default books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});