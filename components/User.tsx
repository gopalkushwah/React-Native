import React, { useRef, useState } from 'react'
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const User = () => {
    const [user, setUser] = useState({name:'',password:''})
    const [userAsync, setUserAsync] = useState({name:'',password:''})
    const [updateDisable, setUpdateDisable] = useState(false)
    const setAsyncStorage = async () =>{
        setUpdateDisable(false);

        const data = await AsyncStorage.setItem("user",JSON.stringify(user));
        setUser({name:'',password:''});
        console.warn("Set successfull");
        
    }
    const getAsyncStorage =async () =>{
        const data = await AsyncStorage.getItem("user"); 
        // console.warn(JSON.parse(data));
        setUserAsync(JSON.parse(data));
    }
    const removeAsyncStorage = async () =>{
        setUpdateDisable(true);
        setUserAsync({name:'',password:''})
        await AsyncStorage.removeItem("user"); 
    }
    return (
        <ScrollView>
        <View style={{margin:20}}>
            <Text style={{fontSize : 25,color:"blue"}}>User Name</Text>
            <TextInput
                onChangeText={(text)=>setUser((preData)=>({...preData,name:text}))}
                value={user.name}
                style={styles.input}
                ></TextInput>
            <Text style={{fontSize : 25,color:"blue"}}>Password</Text>
            <TextInput 
                onChangeText={(text)=>setUser((preData)=>({...preData,password:text}))}
                value={user.password}
                secureTextEntry style={styles.input}
            ></TextInput>
            <View>

                <Pressable onPress={setAsyncStorage} style={{borderRadius:10,width : '100%',backgroundColor:'blue',padding : 12,marginBottom : 5}}><Text style={{fontSize : 30,color :'white',fontWeight:'bold',textAlign : 'center'}}>Set Data</Text></Pressable>
                <Pressable 
                disabled={updateDisable} 
                onPress={getAsyncStorage} 
                style={{
                    borderRadius:10,
                    width : '100%', 
                    backgroundColor: updateDisable ? 'rgba(0,255,255,0.4)' : 'blue',
                    padding : 12,
                    marginBottom : 5
                }}><Text style={{fontSize : 30,color :'white',fontWeight:'bold',textAlign : 'center'}}>Get Data</Text></Pressable>
                <Pressable onPress={removeAsyncStorage} style={{borderRadius:10,width : '100%',backgroundColor:'blue',padding : 12}}><Text style={{fontSize : 30,color :'white',fontWeight:'bold',textAlign : 'center'}}>Remove Data</Text></Pressable>
            </View>
        </View>
{
    
    
    userAsync.name != "asyncstorage" ?
        <View style={{margin:20}}>
            <Text style={{fontSize : 25,color:"blue",margin : 5}}>User Name : {userAsync.name}</Text>
            <Text style={{fontSize : 25,color:"blue",margin : 5}}>password : {userAsync.password}</Text>
        </View>
        :
        <Text style={{fontSize : 25,color:"blue",margin : 5}}>Insert Data</Text>
    }
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