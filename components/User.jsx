import React, { useEffect, useState } from 'react'
import {View, Button, Text } from 'react-native';

{/*
    
*/}
const User =() => {

    const [count,setCount]=useState(0);

    useEffect(() => {
        // This code will run after the component is initially rendered (componentDidMount)
        console.warn("hellow");
        console.log('Component has mounted.');
      }, []); // The empty dependency array ensures that this effect runs only once

    const incrementCount = ()=>{
        setCount(count + 1);
    }
    return (
        <View style={{
                margin: 5,
                height : 810
                }}>
            <Text style={{fontSize:30,color:'red'}}>{count}</Text>
            <Button 
            title='Click Me'
            touchSoundDisabled
            onPress={incrementCount}
            ></Button>
        </View>
    )
}

export default User;