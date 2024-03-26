import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycard() {
  return (
    <View>
      <Text style={styles.heading}>Fancycard</Text>
      <ScrollView horizontal={true}>
      <View style = {[styles.card,styles.cardelvated]}>
        <Image
        source={{
            uri : 'https://cdn.tatlerasia.com/tatlerasia/i/2022/11/06100301-kdw-10-042-f2-a_cover_1500x1193.jpg'
        }}
        style={styles.cardImage}
     ></Image>
     <View style = {styles.cardbody}>
        <Text style= {styles.cardTitle}> Korean K Pop</Text>
        <Text style= {styles.cardLable}> Normal Korean guy</Text>
        <Text style= {styles.cardDescription}> gay heheh 😡😡🤬🤬👿😈😈</Text>
        <Text style= {styles.cardfooter}> lol he is still lives in korea with some dece sallery </Text>
     </View>
      </View>

      <View style = {[styles.card,styles.cardelvated]}>
        <Image
        source={{
            uri : 'https://media.sproutsocial.com/uploads/meme-example.jpg'
        }}
        style={styles.cardImage}
     ></Image>
     <View style = {styles.cardbody}>
        <Text style= {styles.cardTitle}> Korean K Pop</Text>
        <Text style= {styles.cardLable}> Normal Korean guy</Text>
        <Text style= {styles.cardDescription}> gay heheh 😡😡🤬🤬👿😈😈</Text>
        <Text style= {styles.cardfooter}> lol he is still lives in korea with some dece sallery </Text>
     </View>
      </View>

      <View style = {[styles.card,styles.cardelvated]}>
        <Image
        source={{
            uri : 'https://cdn.tatlerasia.com/tatlerasia/i/2022/11/06100301-kdw-10-042-f2-a_cover_1500x1193.jpg'
        }}
        style={styles.cardImage}
     ></Image>
     <View style = {styles.cardbody}>
        <Text style= {styles.cardTitle}> Korean K Pop</Text>
        <Text style= {styles.cardLable}> Normal Korean guy</Text>
        <Text style= {styles.cardDescription}> gay heheh 😡😡🤬🤬👿😈😈</Text>
        <Text style= {styles.cardfooter}> lol he is still lives in korea with some dece sallery </Text>
     </View>
      </View>

      <View style = {[styles.card,styles.cardelvated]}>
        <Image
        source={{
            uri : 'https://cdn.tatlerasia.com/tatlerasia/i/2022/11/06100301-kdw-10-042-f2-a_cover_1500x1193.jpg'
        }}
        style={styles.cardImage}
     ></Image>
     <View style = {styles.cardbody}>
        <Text style= {styles.cardTitle}> Korean K Pop</Text>
        <Text style= {styles.cardLable}> Normal Korean guy</Text>
        <Text style= {styles.cardDescription}> gay heheh 😡😡🤬🤬👿😈😈</Text>
        <Text style= {styles.cardfooter}> lol he is still lives in korea with some dece sallery </Text>
     </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize : 24,
        paddingHorizontal : 10,
        fontWeight : 'bold'
    },
    card :{
        width : 350,
        height : 360,
        borderRadius : 6,
        marginVertical : 12,
        marginHorizontal : 16

    },
    cardelvated :{
        backgroundColor : 'grey',
        elevation : 3,
        shadowOffset :{
            width: 1,
            height : 1
        }

    },
    cardImage :{
        height : 200,
        // width : 100
        marginBottom : 8,
        borderTopLeftRadius : 6,
        borderTopRightRadius : 8
    },
    cardbody : {
        flex : 1,
        flexGrow : 1,
        paddingHorizontal : 12
    },
    cardTitle :{
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        marginBottom : 6
    },
    cardLable : {
        color : 'white',
        fontSize : 16,
        marginBottom : 4
    },
    cardDescription : {
        color : 'white',
        fontSize : 12,
        marginBottom : 2,
        marginTop : 6,
        flexShrink : 1
    },
    cardfooter :{
        color : 'white'
    }

})