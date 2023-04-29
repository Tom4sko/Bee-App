import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type AppTextInputProps = {
    /* Render ikonky */
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'],
    text: string,
    secureTextEntry: boolean,
}

export default function AppTextInput(e: AppTextInputProps) {
  return (
    <View style={styles.textBox}> 
            <MaterialCommunityIcons name={e.name} size={25} style={styles.icon} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={e.text}
                style={styles.inputText}
                /* + zarátaj všetko ostatné */
                {...e}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    inputText:{
        fontSize: 20,
    },
    icon:{
        marginHorizontal: 10,
    },
    textBox:{   
        flexDirection: "row",
        marginBottom: 10,
    },
})