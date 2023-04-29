import React from 'react'
import AppButton from '../components/AppButton'

import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native'

type NavigationProps = {
    navigation: any,
    onPress: any;
}

export default function HomeScreen(n: NavigationProps) {
  return (
    <ImageBackground
        style={styles.container}
        source={require("../images/background.png")}
        blurRadius={0.1}
    >

        <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={require("../images/logoImage2.png")} />
            <Text style={styles.text}>Honey for your tummy!</Text>
        </View>

        {/* Každý AppButton musí obsahovať to isté, nesmie tam byť nič na viac inak to hodí type error */}
        <AppButton name="Login" color='#fc4c8a' onPress={ () => n.navigation.navigate("Login")} />       
        <AppButton name="Register" color='#b03562' onPress={ () => n.navigation.navigate("Register")} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    logoContainer:{
        position: 'absolute',
        top: 120,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage:{
        width: 220,
        height: 220,
    },
    text:{
        fontSize: 20,
        fontWeight: "600",
        color: '#b03562',
    }
})