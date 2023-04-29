import { StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

type List = {
    title: string,
    icon: {
     /* Render ikonky  */
      name: React.ComponentProps<typeof MaterialCommunityIcons>['name'],
      backgroundColor: string,
    },
  }

const myList: List[] = [
    {title: "Tomáš Zeleňák", icon:{
        name:"account",
        backgroundColor:"#49b7e6",
    }},
    {title: "Contact", icon:{
        name:"email",
        backgroundColor:"#E3963E",
    }},
    {title: "Messages", icon:{
        name:"format-list-bulleted",
        backgroundColor:"#50C878",
    }},
    {title: "Logout", icon:{
        name:"logout",
        backgroundColor:"#e14752",
    }},
]

export default function Account() {
  return (
    <View style={styles.container}>
      {/*  /* Toto nahrádza funkciu map */}
      <FlatList 
        data={myList}
        keyExtractor={item => item.title}
        renderItem={({item}) => <View>
            <View style={styles.iconContainer}>

                <View style={[styles.iconBackground, {backgroundColor: item.icon.backgroundColor}]}>
                    <MaterialCommunityIcons
                        name={item.icon.name}
                        style={styles.icon}
                        size={25}
                    />
                </View>
 
                <Text style={styles.text}>
                    {item.title}
                </Text>

            </View>
        </View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: "600",
    },
    iconBackground:{
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    icon:{
        marginHorizontal: 10,
    },
    iconContainer:{
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10,
    },
    container:{
        flex: 1,
        marginTop: 10,
        backgroundColor: '#eee',
    },
})