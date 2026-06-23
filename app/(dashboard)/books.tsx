import { FlatList, Pressable, RefreshControl, StyleSheet, TouchableOpacity } from 'react-native'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { useBooks } from '../../hooks/useBooks'
import { useRouter } from 'expo-router'
import Spacer from '../../components/Spacer'
import ThemedCard from '../../components/ThemedCard'
import { Colors } from '../../constants/colors'
import ThemedLoadingScreen from '../../components/ThemedLoadingScreen'


const Books = () => {
  const { fetchBooks, books, loading } = useBooks();
  const router = useRouter();

  // Pull to refresh function to refresh the list of books
  const onRefresh = () => {
    fetchBooks();
  };
  
  return (
    <ThemedView style={styles.container} safe = {true}>
        <ThemedText title={true} style={styles.heading}>
            Your Reading List 
        </ThemedText>
        <Spacer />
        {loading ? (
            <ThemedLoadingScreen />
        ) : (
            <FlatList
              data={books}
              keyExtractor={(item) => item.$id}
              renderItem={({item}) => (
                <Pressable>
                  <ThemedCard style={styles.card}>
                    <ThemedText style={styles.title}>{item.title}</ThemedText>
                    <ThemedText>Written by {item.author}</ThemedText>
                  </ThemedCard>
                </Pressable>
              )}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={onRefresh}
                />
              }
            />
        )}
    </ThemedView>
  );
}

export default Books

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
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  title: { 
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  }
  
});