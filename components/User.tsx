import React, { useRef } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const User = () => {
    const input = useRef();
    const updateInput = ()=>{
        input.current.focus();
        input.current.setNativeProps({
            fontSize :35,
            color :'red'
        })
    }

    return (
        <ScrollView>
        <View style={{margin:20}}>
            <TextInput ref={input} style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <View>
                <Pressable onPress={updateInput} style={{borderRadius:10,width : '100%',backgroundColor:'blue',padding : 12}}><Text style={{fontSize : 30,color :'white',fontWeight:'bold',textAlign : 'center'}}>Update Input</Text></Pressable>
            </View>
        </View>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    input : {
        fontSize:30,
        color:'black',
        borderWidth : 2,
        borderColor: 'blue',
        marginBottom : 20,
        borderRadius:10,
        paddingLeft : 20,
        paddingRight:20
    }
})


export default User;