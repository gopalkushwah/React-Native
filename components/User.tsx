import React, { useEffect } from 'react'
import { View,Text,Button,StyleSheet,TextInput, ScrollView, ActivityIndicator, FlatList, Modal } from 'react-native'
import { useState } from 'react';

const User = () => {
    const [posts,setPosts] = useState([]);
    const [posts1,setPosts1] = useState([]);
    const [deleteChange,setDeleteChange] = useState(0);
    const [updateChange,setUpdateChange] = useState(0);
    const [indicator,setIndicator] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [selectedData,setSelectedData] = useState({id:"",title:"",body:""});
    const getPost= async ()=>{
        setIndicator(true);
        const url = "http://10.0.2.2:8080/posts";
        let result = await fetch(url);
        result = await result.json();
        setIndicator(false);
        setPosts(result);
        setPosts1(result);
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
    const openUpdatePost = (data)=>{
        setShowModal(true);
        setSelectedData(data);
    }
    const updatePost = async ()=>{
        try {
            const url = `http://10.0.2.2:8080/posts/update`;
            let result = await fetch(url,{
                method : 'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(selectedData)
            });
            result = await result.json();
            console.warn(result);
            setUpdateChange(Number.parseInt(result.id));
            setShowModal(false);
        } catch (error) {
        console.warn(error);
        
        }
    }


    const searchPost = async (text) =>{
        // if(!text){
            const url = `http://10.0.2.2:8080/posts/q/${text}`;
            let result = await fetch(url);
            result = await result.json();
            setPosts(result);
        // }else{
        //     getPost();
        // }
    }

    useEffect(()=>{
        getPost();
    },[])

    useEffect(()=>{
        getPost();
    },[deleteChange,updateChange])
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
        <View style={styles.searchWrapper}>
            <TextInput 
            onChangeText={(text)=>searchPost(text)}
            placeholder='Search' style={{borderColor:'black',borderWidth:1,borderRadius:5,padding :10,fontSize :20}}></TextInput>
        </View>
        {
           posts.length>0 ? posts.map((item,index)=><View key={index} style={styles.dataWrapper}>
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
                            <Button color={'blue'} title="Update" onPress={()=>openUpdatePost(item)}></Button>
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
            : posts1.map((item,index)=><View key={index} style={styles.dataWrapper}>
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
                        <Button color={'blue'} title="Update" onPress={()=>openUpdatePost(item)}></Button>
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
        <Modal animationType='fade' visible={showModal} transparent={true}> 
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                <View style={{backgroundColor:'white',padding : 40,width : 350,borderRadius:20,shadowColor :'red',elevation : 10,shadowOpacity:3}}>
                    <View >
                        <TextInput 
                        editable={false}
                        style={{borderColor:'black',borderWidth:1,marginBottom:5,padding:10,borderRadius:10,color:'black'}}
                        value={selectedData.id.toString()} 
                        accessible={false}
                        ></TextInput>
                    </View>
                    <View >
                        <TextInput
                        style={{borderColor:'black',borderWidth:1,marginBottom:5,padding:10,borderRadius:10}}
                        value={selectedData.title} 
                        onChangeText={(text)=>setSelectedData((prevData)=>({ ...prevData, title: text }))}
                        ></TextInput>
                    </View>
                    <View>
                        <TextInput
                        style={{borderColor:'black',borderWidth:1,marginBottom:5,padding:10,borderRadius:10}}
                        value={selectedData.body}
                        onChangeText={(text)=>setSelectedData((prevData)=>({ ...prevData, body: text }))}
                        ></TextInput>
                        
                    </View>
                    <Button color={'orange'} title="Update" onPress={updatePost}></Button>
                    <Text></Text>
                    <Button color={'blue'} title="Close" onPress={()=>setShowModal(false)}></Button>
                </View>
            </View>
        </Modal>
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

    },
    searchWrapper :{
        margin :20
    }
})


export default User;