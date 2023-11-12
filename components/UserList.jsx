import React from "react";
import { Button, Text, View} from "react-native";

const Header = () => {

  return (
      <View style={{
        padding : 10,
        paddingLeft : 20,
        paddingRight : 20,
        backgroundColor:'white'
    }}>
           <Text
           style={{
           
            fontSize:30,
            color:'black'
        }}
           >User List Screen</Text>
      </View>
    
  )
}

export default Header