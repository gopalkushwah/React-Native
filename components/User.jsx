import React, { useEffect, useState } from 'react'
import {View, Button, Text,} from 'react-native';
{/*
    we can use the useEffect hook to replicate the behavior of componentDidUpdate in class components. 
    componentDidUpdate is a lifecycle method that is called after a component has been updated (i.e., after a re-render caused by changes in state or props). 
    The useEffect hook allows you to run a function in response to updates within a functional component. Here's how you can use useEffect to mimic the behavior of componentDidUpdate:
*/}
const User =() => {

    const [toggle,setToggle]=useState(false);
    const [count,setCount]=useState(0);
    return (
        <View style={{height:'100%',backgroundColor: "white"}}>
            <View>
                <Text style={{fontSize:30,color : "black"}}>{count}</Text>

            <Button
            touchSoundDisabled
            title='Toggle Color'
            onPress={()=>{
                setToggle(!toggle);
                setCount(count+1);
            }}
            ></Button>
            {
                toggle ? <UserData toggle={toggle}/> : null
            }
            </View>
        </View>
    )
}

const UserData = ({toggle}) =>{

   let timer =  setInterval(()=>{
        console.warn("interval");
    },2000)
    useEffect(()=>{
        // console.warn("Hellow");


        // to do the cleanup code we have to create a function
        // this function will called automaticaly when component will be in the phase of unmounting
        return () => {
            clearInterval(timer);
        }
    })
    return(
        <View>
            <Text style={{fontSize:30,color : "black"}}>Student</Text>
        </View>
    )
}

export default User;