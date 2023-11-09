import React, { useEffect } from 'react'
import { View,Text,Button,StyleSheet,TextInput, ScrollView, ActivityIndicator } from 'react-native'
import { useState } from 'react';

const User = () => {
const [posts,setPosts] = useState([]);
const [indicator,setIndicator] = useState(false);
    const getPost= async ()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";
        setIndicator(true);
        let result = await fetch(url);
        setIndicator(false);
        result = await result.json();
        // console.warn(result);
        
        setPosts(result);
    }
    useEffect(()=>{
        getPost();
    },[])
    return (
        <ScrollView>
        {
           indicator ? <ActivityIndicator size={100} accessible={false}></ActivityIndicator> : null
        }
        <View >
            {
                posts.map((post,index)=>{
                    return <View key={index}>
                        <Text style={{fontSize:30,color :'black'}}>ID : {post.id}</Text>
                        <Text style={{fontSize:30,color :'black'}}>Name : {post.title}</Text>
                        <Text style={{fontSize:30,color :'black'}}></Text>
                        <Text style={{fontSize:30,color :'black'}}>Description : {post.body}</Text>

                    </View>
                })
            }
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    
})


export default User;