import { Linking, StyleSheet, Text, View ,Image , TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>ActionCard</Text>
      <View style = {[styles.card,styles.elvatedCard]}>
       <View style= {styles.headingContainer}>
        <Text style={styles.headerText}>
            What's new is C++?
        </Text>
       </View>
       <Image
        source= {{
            uri : 'https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg'
        }}
        style= {styles.cardImage}
    ></Image>
    <View style= {styles.cardBody}>
        <Text numberOfLines={2}>
            hjfgfuhjfsdilzxfigusfdig szlifghiszd oiu g dilj ghhgiufsdhguoidhgiuohdogui
            fsdoigh dgyoidgb ihdg
            dzxgfop hxhgsdhg
            xdgfpk jxdfojghxodfghb
            podjx jgo
        </Text>

    </View>
    <View style= {styles.cardFooter}>
        <TouchableOpacity 
        onPress={() => openWebsite('https://reactnative.dev/')}
        >
            <Text style={styles.Readmore}>
                Read More
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => openWebsite('https://reactnative.dev/')}
        >
            <Text style={styles.Readmore}>
                Follow Me
            </Text>
        </TouchableOpacity>

    </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText :{
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8

    },
    card :{
        width : 350,
        height : 360,
        borderRadius : 6,
        marginVertical: 12,
        marginHorizontal :16
    },
    elvatedCard :{
        backgroundColor : 'gray',
        elevation : 3,
        shadowOffset: {
            width :1,
            height :1
        },
        shadowColor: 'red',
        shadowOpacity: 0.3
    },
    headingContainer :{
        height : 40,
        flexDirection :'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    headerText :{
        color :'white',
        fontSize : 20,
        fontWeight : 'bold'
    },
    cardImage :{
        height : 190,
    },
    cardBody :{
        padding : 10
    },
    cardFooter :{
        padding : 8,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    Readmore: {
        fontSize : 14,
        color : 'black',
        backgroundColor : 'white',
        paddingHorizontal : 20,
        paddingVertical : 6,
        borderRadius : 6
    }
})