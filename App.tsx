import React from "react";
import { 
  StatusBar,
  Text,
  View
 } from "react-native";
// import User from "./components/User";
import { WebView } from 'react-native-webview';
import User from "./components/User";
const App = () => {
  return (
    <View style={{flex :1}}>
      <User></User>
    </View>
  )
}

export default App