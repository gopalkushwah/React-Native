import React,{useEffect,useState} from "react";
import {Image, Text, View,Button} from "react-native";
import {useDispatch,useSelector} from 'react-redux'
import { addToCart, removeFromCart } from "./redux/action";
const Product = ({item}) => {
    const [isAdded, setIsAdded] = useState(false)
    const cartData = useSelector((state)=>state.reducer);
    const dispatch = useDispatch();
    const handleAddToCart = (item) =>{
        dispatch(addToCart(item));
    }
    
    
    const handleRemoveFromCart = (item) =>{
         dispatch(removeFromCart(item));
    }

    useEffect(() => {
        let result = cartData.filter(element =>{
            return element.id === item.id
        });
        if(result.length)
            setIsAdded(true);
        else
            setIsAdded(false);
    }, [cartData])
    
  return (
        <View style={{shadowColor : 'rgba(0,0,0,0.2)',elevation : 10}}>
            <View key={item.id} style={{flexDirection :'row',margin : 8,borderWidth : 1,borderColor : 'blue',borderRadius: 10,padding : 8,backgroundColor:'white'}}>
                <View style={{flex : 1,borderRadius: 10}}>
                    <Image style={{width : 120,height : 143,borderRadius: 10}} source={item.image}></Image>
                </View>

                <View style={{flex : 2}}>
                    <Text style={{color:'black',fontSize: 20}}>ID : {item.id}</Text>
                    <Text style={{color:'black',fontSize: 20}}>NAME : {item.name}</Text>
                    <Text style={{color:'black',fontSize: 20}}>COLOR : {item.color}</Text>
                    <Text style={{color:'black',fontSize: 20}}>PRICE : रु {item.price}</Text>
                    {
                        isAdded ?
                            <Button 
                                title='Remove from cart'
                                onPress={()=>handleRemoveFromCart(item)}
                            ></Button> 
                            : 
                            <Button 
                                title='Add to cart'
                                onPress={()=>handleAddToCart(item)}
                            ></Button> 

                    }
                </View>
            </View>
        </View>
            
  )
}

export default Product