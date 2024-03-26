import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCrd from './Components/FlatCrd'
import Elivatedcards from './Components/Elivatedcards'
import Fancycard from './Components/Fancycard'
import ActionCard from './Components/ActionCard'
import Contactlist from './Components/Contactlist'

const APP = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <FlatCrd></FlatCrd>
        <Elivatedcards></Elivatedcards>
        <Fancycard></Fancycard>
        <ActionCard></ActionCard>
        <Contactlist></Contactlist>
        </ScrollView>
    </SafeAreaView>
  )
}

export default APP