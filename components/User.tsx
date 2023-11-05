import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TextInput, Alert } from 'react-native';

{/*
    
*/}

const User = () : JSX.Element => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [display,setDisplay] = useState(false);
    const [isShow,setIsShow] = useState(true);
    return (
        <View style={{
            padding : 10
        }}>
            <Text style={{fontSize : 30,color : '#000'}}>Input Field</Text>
            <Text style={{fontSize : 20,color : '#000',marginTop : 20}}>Enter Your Name : </Text>
            <TextInput 
                style={styles.inputStyle}
                onChangeText={(value)=>{
                    setName(value);
                }}
                value={name}
            ></TextInput>
            <Text style={{fontSize : 20,color : '#000',marginTop : 20}}>Enter Your Email : </Text>
            <TextInput 
                style={styles.inputStyle}
                onChangeText={(value)=>{
                    setEmail(value);
                }}
                value={email}
                autoCapitalize='none'
                keyboardType='email-address'
               
            ></TextInput>
            
            <Text style={{fontSize : 20,color : '#000',marginTop : 20}}>Enter Your Password : </Text>
            <View style={{
                marginBottom : 3
            }}>

            <TextInput 
                style={styles.inputStyle}
                onChangeText={(value)=>{
                    setPassword(value);
                }}
                value={password}
                secureTextEntry={isShow}
                ></TextInput>
                <Button 
                    title='Show Password'
                    onPress={()=>{
                        setIsShow(!isShow);
                    }}
                ></Button>
            </View>
            

            <Button title='Submit'
            color={'red'}
            onPress={()=>{
                setDisplay(!display);
            }}
            touchSoundDisabled={true}
            ></Button>
            <Text ></Text>
            <Button title='Clear' onPress={()=>{
                setName("");
                setEmail("");
                setPassword("");
            }}
            touchSoundDisabled={true}
            ></Button>
            {
                    display ? 
            <View style={{
                backgroundColor : 'green',
                borderColor :'black',
                borderWidth : 2,
                borderBottomWidth : 10,
                borderRadius : 5,
                marginTop : 20
            }}>
                
                    <View>
                        <Text style={{fontSize : 20,color : '#fff',margin : 5}}>Name     : {name}</Text>
                        <Text style={{fontSize : 20,color : '#fff',margin : 5}}>Email    : {email}</Text>
                        <Text style={{fontSize : 20,color : '#fff',margin : 5}}>Password : {password}</Text>
                    </View> 
               
            </View> : null
             }
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle : {
        fontSize : 20,
        color : '#000',
        borderColor : 'black',
        borderWidth : 1,
        borderRadius : 5,
        marginBottom : 12,
        paddingLeft : 15,
        
    }
})

export default User;