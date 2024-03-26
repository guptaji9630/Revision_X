import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Top from './Compnents2/Top'
import Feed from './Compnents2/Feed'

export default function AppProt3() {
  return (
    <SafeAreaView>
    <ScrollView>
        <Top></Top>
        <Feed></Feed>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})