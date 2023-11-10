import React, { useEffect } from 'react'
import { View,Text,Button,StyleSheet,TextInput, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';

const User = () => {
    const [posts,setPosts] = useState({id:"",title:"",body:""});
    const [indicator,setIndicator] = useState(false);
    const savePost= async ()=>{
        setIndicator(true);
        const post = {
            "title": "Hello I am Sumit  learning javasript",
            "body": "Javasript is programming language"
        };
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
        <View>
            <Button title='Save Data' onPress={savePost}></Button>
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