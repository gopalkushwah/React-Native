import React,{useState , useEffect} from "react";
import { Text, View} from "react-native";
import { useSelector } from "react-redux";
const Header = () => {
const cartData = useSelector((state)=>state.reducer);
const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(cartData.length);
    }, [cartData]);
  return (
      <View style={{
        padding : 10,
        paddingLeft : 20,
        paddingRight : 20,
        backgroundColor:'white'
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
            <View style={{
                    padding : 2,
                    paddingLeft:10,
                    paddingRight:10,
                    backgroundColor:'red',
                    borderRadius:10
                }}>
                <Text style={{
                    fontSize : 30,
                    color:'white'
                }}>{count}</Text>
            </View>
        </View>
      </View>
    
  )
}

export default Header