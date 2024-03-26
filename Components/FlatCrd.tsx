import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCrd() {
  return (
    <View>
      <Text style = {styles.headingText}>Flat Crd</Text>
      <View style = {styles.container}>
        <View style = {[styles.card,styles.cardone]}>
        
            <Text>  RED </Text>
        </View>
        <View style = {[styles.card,styles.cardtwo]}>
            <Text> Blue </Text>
        </View>
        <View style = {[styles.card,styles.cardthree]}>
            <Text> Green </Text>
        </View>
      </View>
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
        flex : 1,
        flexDirection: 'row',
        padding: 10
    },
    card :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        width : 100,
        height : 100,
        borderRadius : 4,
        margin : 8
    },
    cardone :{
        backgroundColor : '#EF5354'
    },
    cardtwo :{
        backgroundColor : 'blue'
    },
    cardthree :{
        backgroundColor : 'green'
    },


})