import React, { useEffect, useState } from 'react'
import {View, Button, StyleSheet, Text } from 'react-native';

{/*
    
*/}
const User =() => {

    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);

    // useEffect is used for handling side effects in functional components. 
    // It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

    // It will we called automaticaly when we change anything in the component
    // useEffect(()=>{
    //     console.warn("hellow");
    // })


    // useEffect hook as componentDidMount
    // componentDidMount is an lifecyle method of class component , which helps to set the initial value for the component , to fetch the data from network when component get called and many more works which is neccesory to do at the biggining of the component lifecycle
    // useEffect(()=>{
    //     console.warn("hellow");
    // },[])

    // useEffect hook as componentDidUpdate
    // componentDidUpdate is an lifecyle method of class component , which helps to re-render the component when a spacific state or props get changed , or a component get updated
    // if the count get changed then the useEffect hook will called automaticaly
    useEffect(()=>{
        console.warn("hellow");
    },[count])

    const incrementCount = ()=>{
        setCount(count + 1);
    }
    
    const incrementCount1 = ()=>{
        setCount1(count1 + 1);
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
            
            <Text style={{fontSize:30,color:'red'}}>{count1}</Text>
            <Button 
            title='Click Me'
            touchSoundDisabled
            onPress={incrementCount1}
            ></Button>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {  
        backgroundColor: 'white',  
        borderRadius: 8,  
        paddingVertical: 45,  
        paddingHorizontal: 25,  
        width: '100%',  
        marginVertical: 10,  
        borderColor : 'black',
        borderWidth : 1
      },  
    shadowProp: {  
        // shadowOffset : {width : -2 , height : 20},
        // shadowOpacity : 1,
        shadowColor: '#000',  
        elevation:10,  
      },  
      heading: {  
        fontSize: 18,  
        fontWeight: '600',  
        marginBottom: 13,  
      },  
})
export default User;