import React, { Component } from "react";
import { 
  View,
  
 } from "react-native";
import User from "./components/User";

 class App extends Component{

  render(){
    return(
        <View >
          <User count={25}/>
        </View>
    )
  }
 }


 export default App;