import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

type NavigationProps = {
    navigation: any,
    onPress: any;
}

export default function LoginForm(n: NavigationProps) {
  return (
    <View style={styles.container}>

       <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={require("../images/logoImage2.png")} />
            <Text style={styles.text}>Honey for your tummy!</Text>
        </View>

        <View style={{marginBottom: 10, marginTop: 20}}>
            <AppTextInput name="email" text="E-mail" secureTextEntry={false} />
            <AppTextInput name="lock" text="Password" secureTextEntry={true} />
        </View>

        <AppButton name="Login" color="#fc4c8a" onPress={ () => n.navigation.navigate("Account")}/>

    </View>
  )
}

const styles = StyleSheet.create({
    inputText:{
        fontSize: 20,
    },
    icon:{
        marginHorizontal: 10,
        color: '#fc4c8a',
    },
    textBox:{   
        flexDirection: "row",
        marginBottom: 10,
    },
    container:{
        flex: 1,
    },
    logoContainer:{
        marginTop: 40,
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
        marginBottom: 10,
    },
})