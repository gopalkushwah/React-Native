import React from 'react'
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const User = () => {
    return (
        <View>
           <TouchableHighlight
           
           >
            <Text 
            onPress={()=>{
                Alert.alert("Jai Shree Ram ")
            }}
            style={[styles.button,styles.btn]}>Button</Text>
           </TouchableHighlight>
           <TouchableHighlight
           
           >
            <Text 
            onPress={()=>{
                Alert.alert("Jai Shree Ram ")
            }}
            style={[styles.button1,styles.btn]}>Button</Text>
           </TouchableHighlight>
           <TouchableHighlight
           
           >
            <Text 
            onPress={()=>{
                Alert.alert("Jai Shree Ram ")
            }}
            style={[styles.button2,styles.btn,{backgroundColor : 'black'}]}>Button</Text>
           </TouchableHighlight>
           <TouchableHighlight
           
           >
            <Text 
            onPress={()=>{
                Alert.alert("Jai Shree Ram ")
            }}
            style={[styles.button3,styles.btn]}>Button</Text>
           </TouchableHighlight>
           <TouchableHighlight
           
           >
            <Text 
            onPress={()=>{
                Alert.alert("Jai Shree Ram ")
            }}
            style={[styles.button4,styles.btn]}>Button</Text>
           </TouchableHighlight>
           <TouchableHighlight
           
           >
            <Text 
            onPress={()=>{
                Alert.alert("Jai Shree Ram ")
            }}
            style={[styles.button5,styles.btn]}>Button</Text>
           </TouchableHighlight>
           <TouchableHighlight
           
           >
            <Text 
            onPress={()=>{
                Alert.alert("Jai Shree Ram ")
            }}
            style={[styles.button6,styles.btn]}>Button</Text>
           </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    btn :{
        fontSize : 30,
        margin : 10,
        marginTop : 20,
        textAlign : 'center',
        padding : 5,
        backgroundColor : 'white',
        borderWidth :1 ,
        borderRadius :10,
        elevation : 10

    },
    button : {
        color : 'red',
        borderColor : 'red',
        shadowColor : 'red',
    },
    button1 : {
        color : 'blue',
        borderColor : 'blue',
        shadowColor : 'red',
    },
    button2 : {
        color : 'yellow',
        borderColor : 'yellow',
        shadowColor : 'yellow',
        backgroundColor : 'red',
        
    },
    button3 : {
        color : 'green',
        borderColor : 'green',
        shadowColor : 'green',
    },
    button4 : {
        color : 'pink',
        borderColor : 'pink',
        shadowColor : 'pink',
    },
    button5 : {
        color : 'orange',
        borderColor : 'orange',
        shadowColor : 'orange',
    },
    button6: {
        color : 'blue',
        borderColor : 'blue',
        shadowColor : 'red',
    }
})

export default User;