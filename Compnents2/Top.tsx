import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Top() {
  return (
    <ScrollView horizontal>
        <View style = {styles.top}>
            <Image
            source={{
                uri : 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
            }}
            style = {styles.image}
            >

            </Image>
            <View style = {styles.heading}>
                <Text> Harshvarden </Text>
            </View>
        </View>

        <View style = {styles.top}>
            <Image
            source={{
                uri : 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
            }}
            style = {styles.image}
            >

            </Image>
            <View style = {styles.heading}>
                <Text> Harshvarden </Text>
            </View>
        </View>

        <View style = {styles.top}>
            <Image
            source={{
                uri : 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
            }}
            style = {styles.image}
            >

            </Image>
            <View style = {styles.heading}>
                <Text> Harshvarden </Text>
            </View>
        </View>

        <View style = {styles.top}>
            <Image
            source={{
                uri : 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
            }}
            style = {styles.image}
            >

            </Image>
            <View style = {styles.heading}>
                <Text> Harshvarden </Text>
            </View>
        </View>

        <View style = {styles.top}>
            <Image
            source={{
                uri : 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
            }}
            style = {styles.image}
            >

            </Image>
            <View style = {styles.heading}>
                <Text> Harshvarden </Text>
            </View>
        </View>

        <View style = {styles.top}>
            <Image
            source={{
                uri : 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg'
            }}
            style = {styles.image}
            >

            </Image>
            <View style = {styles.heading}>
                <Text> Harshvarden </Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    image :{
        height : 60,
        width : 60,
        borderRadius : 60/2,
        margin : 15

    },
    top : {
        padding : 7
    },
    heading :{}
})