import { Image, ImageProps, useColorScheme, View } from 'react-native'

import DarkLogo from "../assets/img/logo_dark.png"
import LightLogo from "../assets/img/logo_light.png"

interface ThemedLogoProps extends ImageProps {}

const ThemedLogo = ({...props}: ThemedLogoProps) => {
    const colorScheme = useColorScheme();
    
    const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

    return (
        <Image source={logo} {...props}/>
    ); 
}

export default ThemedLogo