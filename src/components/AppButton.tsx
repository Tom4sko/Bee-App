import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type AppButtonProps = {
    name: string,
    color: string,
    onPress: any;
}

export default function AppButton(e: AppButtonProps) {
  return (
    <TouchableOpacity
        style={[styles.button, {backgroundColor: e.color}]}
        onPress={e.onPress}
        >
            <Text style={styles.text}>
                {e.name}
            </Text>

        </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#fc4c8a',
        marginBottom: 20,
        padding: 10,
        borderRadius: 20,
        width: "95%",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text:{
        fontSize: 20,
        fontWeight: "600",
        color: '#fafafa',
    }
})