import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  
 } from "react-native";
import User from "./components/User";

 const App = () : JSX.Element =>{

  return(
    <SafeAreaView>
      <View >
        <User/>
      </View>
    </SafeAreaView>
  )
 }


 export default App;