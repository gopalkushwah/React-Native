import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  Button,
  
 } from "react-native";

 const App = () : JSX.Element =>{
  return(
    <View style={{
      borderRadius : 20,
      margin :10
    }}>
      <Text>Hello</Text>
      <Button  title="Click here"></Button>
    </View>
  )
 }

 const styles = StyleSheet.create({
  
});

 export default App;