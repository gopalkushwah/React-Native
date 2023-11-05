import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

{/*
    
*/}

const User = () : JSX.Element => {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    return (
        <View>
            <Text style={{fontSize : 30,color : '#000',margin : 5}}>Input Field</Text>
            <Text style={{fontSize : 20,color : '#000',margin : 5}}>Enter Your name : </Text>
            <TextInput 
                style={{fontSize : 20,color : '#000',margin : 5,borderColor : 'black',borderWidth : 1,borderRadius : 5}}
                onChangeText={(value)=>{
                    setFname(value);
                }}
                value={fname}
                id='firstName'
            ></TextInput>
            <TextInput 
                style={{fontSize : 20,color : '#000',margin : 5,borderColor : 'black',borderWidth : 1,borderRadius : 5}}
                onChangeText={(value)=>{
                    setLname(value);
                }}
                id='lastName'
                value={lname}
            ></TextInput>
            <Button title='Clear' onPress={()=>{
                setFname("");
                setLname("");
            }}></Button>
            <Text style={{fontSize : 20,color : '#000',margin : 5}}>{fname}</Text>
            <Text style={{fontSize : 20,color : '#000',margin : 5}}>{lname}</Text>
        </View>
    )
}


export default User;