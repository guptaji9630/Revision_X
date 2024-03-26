import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BackgroundChange() {
 const [background , setbackground] = useState("#fffff");

 const generateColor = ()=>{
    const hexRange = "012356789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16)]
        
    }
    setbackground(color)
 }
  return (
  <>
  <StatusBar backgroundColor={background}/>
  <View style = {[styles.container, {backgroundColor : background}]}>
    <TouchableOpacity onPress = {generateColor}>
        <View style = {styles.actionBtn}>
            <Text style = {styles.actionBtnText}> button </Text>
        </View>
    </TouchableOpacity>
  </View>
  </>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    actionBtn : {
        borderRadius: 12,
        backgroundColor : '#ffffff',
        // width : 100,
        // height : 100,

        paddingHorizontal : 40,
        paddingVertical : 10
    },
    actionBtnText : {
        fontSize : 24,
        color : '#000000',
        textTransform : 'uppercase'
    }
})