import React,{useContext,useEffect} from 'react'
import Context from '../contexts/Context'
import { View, Text } from 'react-native';

const Posts = () => {
    const context  = useContext(Context);
    useEffect(() => {
        context.updateState("Gopal kush");

    
    }, [])

  return (
    <View style={{margin:20}}>
            
    </View>
  )
}

export default Posts