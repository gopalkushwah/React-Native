import React from 'react'
import { View,Text,Button,StyleSheet,TextInput } from 'react-native'
import { useState } from 'react';

const User = (props) => {
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    return (
        <View style={styles.view} >
            <Text style={styles.text}>Hello , Login to continue</Text>
            <TextInput
            onChangeText={(text)=>setName(text)}
            style={{backgroundColor :'white',width :300,borderRadius : 5,marginBottom :5,marginTop :5}}></TextInput>
            <TextInput
            onChangeText={(text)=>setAge(Number.parseInt(text))}
            style={{backgroundColor :'white',width :300,borderRadius : 5,marginBottom :5}}></TextInput>
            <Button 
                title='Go To Home'
                color={'blue'}
                onPress={()=>props.navigation.navigate('Home',{name,age})}
            ></Button>
        </View>
      )
    }
    const styles = StyleSheet.create({
        view : {
            flex : 1,
            backgroundColor : 'red',
            alignItems:'center',
            justifyContent :'center'
        },
        text : {
            color :'white',
            fontSize:30
        }
    })


export default User;