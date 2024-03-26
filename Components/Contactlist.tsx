import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contactlist() {
    const contact = [
        {
        uid : 1,
        Name : 'Abhishek',
        imgurl : 'https://cdn.pixabay.com/photo/2015/11/06/13/25/blog-1027861_640.jpg',
    },
    {
        uid :2,
        Name : 'Sahaj',
        imgurl : 'https://cdn.pixabay.com/photo/2015/11/06/13/25/blog-1027861_640.jpg',
    },


];
  return (
    <View>
      <Text style = {styles.headingText}>Contactlist</Text>
      <ScrollView style= {styles.container}
      scrollEnabled ={false}
      >
        {contact.map(({uid,Name,imgurl})=> (
            <View key={uid} style = {styles.usercard}>
                <Image
                source={{
                    uri : imgurl
                }}
                style= {styles.userimage}
                />
                <Text style = {styles.userName} >{Name}</Text>
               
            </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal : 8
    },
    container :{
        paddingHorizontal : 16,
      
    },
    usercard :{
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : 3,
        backgroundColor : 'white',
        padding : 8,
        borderRadius : 20,
    
    },
    userimage : {
        height : 50,
        width : 50,
        borderRadius : 60/2,
        marginRight : 15
    },
    userName :{
        fontWeight : '600',
        fontSize : 16,
        color : 'black'

    }
})