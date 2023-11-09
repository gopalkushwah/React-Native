import React from "react";
import { 
  StatusBar,
  Text,
  View
 } from "react-native";
// import User from "./components/User";
import { WebView } from 'react-native-webview';
const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar
      backgroundColor={'blue'}

      ></StatusBar>
      <WebView source={{uri : 'https://panditsoft.in/'}}></WebView>
    </View>
  )
}

export default App