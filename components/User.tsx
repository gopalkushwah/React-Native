import React, { useEffect } from 'react'
import { View,Text,Button,StyleSheet,TextInput, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';

const User = () => {
    const [posts,setPosts] = useState({id:"",title:"",body:""});
    const [input,setInput] = useState({title:"",body:""});
    const [indicator,setIndicator] = useState(false);
    const [titleError,setTitleError] = useState(false);
    const [bodyError,setBodyError] = useState(false);
    const savePost= async ()=>{
        !input.title ? setTitleError(true) : setTitleError(false);
        !input.body ? setBodyError(true) : setBodyError(false);

        if(!input.title  || !input.body){
            return false;
        }

        setIndicator(true);
        const post = {
            "title": input.title,
            "body": input.body
        };
        // console.warn(post);

        const url = "http://10.0.2.2:8080/save-posts";
        let result = await fetch(url,{
            method :'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(post) 
        });
        result = await result.json();
        setIndicator(false);
        // console.warn(result);
        
        setPosts(result);
    }
    return (
        <ScrollView>
        {
            indicator?<View style={{alignItems :'center',justifyContent :'center'}}>
                <ActivityIndicator size={100} ></ActivityIndicator>
            </View> : null
            
        }
        <View style={{margin :20}}>
            {titleError ?<Text style={{fontSize:20,color:'red',marginBottom : 5}}>Enter Valid Title</Text> : null}
            <TextInput
            style={{
                marginBottom : 10,
                padding : 15,
                borderRadius : 10,
                borderColor:'black',
                borderWidth : 1,
                fontSize : 20
            }}
            onChangeText={(text)=>setInput((prevData)=>({ ...prevData, title: text }))}
            placeholder='Enter title'></TextInput>

            {bodyError ?<Text style={{fontSize:20,color:'red',marginBottom : 5}}>Enter Valid Description</Text> : null}
            
            <TextInput
            style={{
                marginBottom : 10,
                padding : 15,
                borderRadius : 10,
                borderColor:'black',
                borderWidth : 1,
                fontSize : 20
            }}
            onChangeText={(text)=>setInput((prevData)=>({ ...prevData, body: text }))}
            placeholder='Enter body'></TextInput>
            <View style={{borderRadius : 10}}>
                <Button title='Save Data'  onPress={savePost}></Button>
            </View>
        </View>
        <View>

            <Text style={{fontSize:30,color:'black'}}>ID : {posts.id}</Text>
            <Text style={{fontSize:30,color:'black'}}>TITLE : {posts.title}</Text>
            <Text style={{fontSize:30,color:'black'}}>BODY : {posts.body}</Text>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    
})


export default User;