import React, { useEffect } from 'react'
import { View,Text,Button,StyleSheet,TextInput, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';

const User = () => {
    const [posts,setPosts] = useState([]);
    const [deleteChange,setDeleteChange] = useState(0);
    const [indicator,setIndicator] = useState(false);
    const getPost= async ()=>{
        setIndicator(true);
        const url = "http://10.0.2.2:8080/posts";
        let result = await fetch(url);
        result = await result.json();
        setIndicator(false);
        setPosts(result);
    }
    const deletePost= async (id)=>{
        setIndicator(true);
        const url = `http://10.0.2.2:8080/posts/delete/${id}`;
        let result = await fetch(url,{
            method : 'DELETE'
        });
        result = await result.text();
        setIndicator(false);
        console.warn(result);
        
    }

    useEffect(()=>{
        getPost();
    },[deleteChange])
    return (
        <ScrollView>
        {
            indicator?<View style={{alignItems :'center',justifyContent :'center'}}>
                <ActivityIndicator size={100} ></ActivityIndicator>
            </View> : null
        }
        <View style={styles.headingWrapper}>
            <View style={styles.text1}>
                <Text style={styles.text}>ID</Text>
            </View>
            <View style={styles.text2}>
                <Text style={styles.text}>TITLE</Text>
            </View>
            <View style={styles.text3}>
                <Text style={styles.text}>BODY</Text>
            </View>
        </View>
        {
            posts.map((item,index)=><View style={styles.dataWrapper}>
                <View style={styles.wrapper}>
                    <View style={styles.wrapper1}>
                        <View style={styles.text1}>
                            <Text style={styles.text}>{item.id}</Text>
                        </View>
                        <View style={styles.text2}>
                            <Text style={styles.text}>{item.title}</Text>
                        </View>
                        <View style={styles.text3}>
                            <Text style={styles.text}>{item.body}</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper2}>
                        <View style={styles.buttonWrapper}>
                            <Button color={'blue'} title="Update"></Button>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <Button 
                                color={'red'} 
                                title="delete"
                                onPress={()=>{
                                    deletePost(item.id);
                                    setDeleteChange(item.id+1);
                                }}
                            ></Button>
                        
                        </View>
                    </View>
                </View>
            </View>)
        }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    dataWrapper:{
        // flex :1,
        
    },
    headingWrapper:{
        flex : 1,
        flexDirection :'row',
        justifyContent : 'space-around',
        shadowColor :'rgba(0,0,0,0.2)',
        elevation :10,
        padding : 40,
        borderRadius : 20,
    },
    wrapper: {
        // flex :1,
        margin :5,
        shadowColor :'rgba(0,0,0,0.2)',
        elevation :10,
        padding : 20,
        borderRadius : 20,
    },
    wrapper1: {
        // flex :1,
        flexDirection :'row',
        justifyContent : 'space-around',
        padding :20
        
    },
    buttonWrapper:{
        margin :5
    },
    text1: {
        flex :1
    },
    text2: {
        flex :2
    },
    text3: {
        flex :4
    },
    text: {
        fontSize : 18,
        color:'black'

    }
})


export default User;