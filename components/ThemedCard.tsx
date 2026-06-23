import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../src/theme/useTheme';

interface ThemedCardProps {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

const ThemedCard = ({ style, children, ...props }: ThemedCardProps) => {
    const theme = useTheme();

    return (
        <View
            style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
            {...props}
        >
            {children}
        </View>
    );
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    }
}); 