import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elivatedcards() {
  return (
    <View>
      <Text style ={styles.headingText}>Elivatedcards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardelvated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card,styles.cardelvated]}>
            <Text>
                me
            </Text>
        </View>
        <View style={[styles.card,styles.cardelvated]}>
            <Text>
                pls
            </Text>
        </View>
        <View style={[styles.card,styles.cardelvated]}>
            <Text>
                😏
            </Text>
        </View>
        <View style={[styles.card,styles.cardelvated]}>
            <Text>
                🍑
            </Text>
        </View>
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
        flex: 1,
        padding : 8,
    },
    card :{
        flex : 2,
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 100,
        borderRadius : 4,
        margin : 8,
        color : ''

    },
    cardelvated: {
        backgroundColor : 'gray',
        elevation : 4,
        shadowOffset: {
            width: 1,
            height : 1
        },
        shadowColor : 'red',
        shadowOpacity : 0.4,
        shadowRadius : 2
    }
})