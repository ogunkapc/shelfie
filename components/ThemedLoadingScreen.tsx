import { View } from "react-native";
import ThemedLoader from "./ThemedLoader";

const ThemedLoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <ThemedLoader size="large" />
        </View>
    );
}

export default ThemedLoadingScreen

