import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Feed() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}> Post </Text>
      <ScrollView>
        <View style = {styles.Feedbox}>
            
        <Image
            source={{
                uri : 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
            }}
            style = {styles.image}
            >

            </Image>
           <View>
            <Text> @username</Text>
           </View>
        </View>
      </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize : 30,
        fontWeight :'bold'
    },
    container : {
        margin : 20,
    },
    Feedbox : {
        height : 50,
        width : 500,
        backgroundColor : 'grey',
        marginVertical : 15,
        
    },
    image :{
        height : 40,
        width : 40,
        borderRadius : 60/2,
        marginHorizontal : 6,
        marginVertical : 5
    },
    username :{
       marginHorizontal : 50,
       marginEnd : 50
    }
})