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
        <User name="Gopal" age={22} address="Bhopal"/>
      </View>
    </SafeAreaView>
  )
 }


 export default App;