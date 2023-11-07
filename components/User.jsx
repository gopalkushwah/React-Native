import React, { useEffect, useState } from 'react'
import {View, Button, Text } from 'react-native';

{/*
    we can use the useEffect hook to replicate the behavior of componentDidUpdate in class components. 
    componentDidUpdate is a lifecycle method that is called after a component has been updated (i.e., after a re-render caused by changes in state or props). 
    The useEffect hook allows you to run a function in response to updates within a functional component. Here's how you can use useEffect to mimic the behavior of componentDidUpdate:
*/}
const User =() => {

    const [count,setCount]=useState(0);
    const [data,setData]=useState(100);

    const incrementCount = ()=>{
        setCount(count + 1);
    }
    const incrementData = ()=>{
        setData(data + 5);
    }
    return (
        <View style={{
                margin: 5,
                height : 810
                }}>
            <Text style={{fontSize:30,color:'red'}}>{count}</Text>
            <Button 
            title='Click Me Count'
            touchSoundDisabled
            onPress={incrementCount}
            ></Button>
            
            <Text style={{fontSize:30,color:'black'}}>{data}</Text>
            <Button 
            title='Click Me Data'
            touchSoundDisabled
            onPress={incrementData}
            ></Button>

            <UserContacts info={{count,data}}/>
        </View>
    )
}



const UserContacts = (props) =>{
    const {count,data} = props.info;
    useEffect(()=>{
        console.warn("count has changed "+count);
    },[count]);

    useEffect(()=>{
        console.warn("data has changed "+data);
    },[data]);

    return(
        <View>
            <Text style={{fontSize:40,color:'red'}}>Use Data Component</Text>
            <Text style={{fontSize:30,color:'black'}}>{count}</Text>
            <Text style={{fontSize:30,color:'green'}}>{data}</Text>
        </View>

    )
    
}
export default User;