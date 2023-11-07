import React, { useEffect, useState } from 'react'
import {View, Button, Text } from 'react-native';

{/*
    we can use the useEffect hook to replicate the behavior of componentDidUpdate in class components. 
    componentDidUpdate is a lifecycle method that is called after a component has been updated (i.e., after a re-render caused by changes in state or props). 
    The useEffect hook allows you to run a function in response to updates within a functional component. Here's how you can use useEffect to mimic the behavior of componentDidUpdate:
*/}
const User =() => {

    const [toggle,setToggle]=useState(false);
    return (
        <View style={{height:'100%',backgroundColor: toggle ? "black" : "white"}}>
            <View 
            style={{
                margin : 10,
                marginTop :'auto',
                marginBottom :'auto'
                }}
            >
            <Button
            title='Toggle Color'
            onPress={()=>{
                setToggle(!toggle)
            }}
            ></Button>
            </View>
        </View>
    )
}

export default User;