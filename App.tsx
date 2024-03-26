import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';

function App(){
  return (
    <SafeAreaView>
    <View>
      <Text>
        Hello World !
      </Text>
      <Text> 
        this is going to be the greate app 
      </Text>
    </View>
    <View>
      <Button 
        title ="Press me "
        onPress={() => Alert.alert('you sumg dont me boobs')}
      />
    </View> 
  </SafeAreaView>
  )
}
export default App;