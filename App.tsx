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
    <View style={{
      height : '100%'
    }}>
      <View style={{
      flex : 1,
      // flexDirection: 'row',
      }}>
        <User name="gopal" age="22" mobile="2121454875"/>
        <User name="anish" age="45" mobile="8877998877"/>
        <User name="satyam" age="100" mobile="2233665588"/>
        <User name="giriraj" age="110" mobile="8787454545"/>
        <User name="ritik" age="40" mobile="8754548878"/>
        <User name="ram" age="87" mobile="7798797954"/>
      </View>
    </View>
    </SafeAreaView>
  )
 }


 export default App;