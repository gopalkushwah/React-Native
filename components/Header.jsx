import React from "react";
import { Text, View} from "react-native";

const Header = () => {

  return (
      <View style={{
        margin : 10,
        marginLeft : 20,
        marginRight : 20,
        
    }}>
            <View style={{
            flexDirection :'row',
            justifyContent :'space-between',
            shadowColor : 'black',
            elevation : 10
        }}>
            <Text style={{
                fontSize : 30,
                color:'red'
            }}>Redux app</Text>
            <Text style={{
                fontSize : 30,
                color:'black'
            }}>0</Text>
        </View>
      </View>
    
  )
}

export default Header