import React, { useEffect } from 'react'
import { View,Text,Button,StyleSheet,TextInput, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';

const User = () => {
    const [posts,setPosts] = useState([]);
    const [indicator,setIndicator] = useState(false);
    const getPost= async ()=>{
        const url = "http://10.0.2.2:8080/posts";
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
            indicator?<View style={{alignItems :'center',justifyContent :'center'}}>
                <ActivityIndicator size={100} ></ActivityIndicator>
            </View> :
            <View>
                <FlatList
                data={posts}
                renderItem={({item})=>(
                <View style={{borderBottomColor:'gold',borderBottomWidth : 1,padding : 10,margin : 5,shadowColor :'black',elevation:3}}>
                    <Text style={{fontSize:30,color :'black'}}>ID : {item.id}</Text>
                    <Text style={{fontSize:30,color :'black'}}>Name : {item.title}</Text>
                    <Text style={{fontSize:30,color :'black'}}></Text>
                    <Text style={{fontSize:30,color :'black'}}>Description : {item.body}</Text>
                </View>)}
                >
                </FlatList>
            </View>
        }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    
})


export default User;