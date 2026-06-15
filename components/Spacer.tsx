import { StyleProp, View, ViewStyle } from 'react-native'

interface SpacerProps {
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
    style?: StyleProp<ViewStyle>;
}

const Spacer = ({ width = "100%", height = 40, style } : SpacerProps) => {
    return (
        <View style={[{ width, height }, style]} />
    );
} 

export default Spacer