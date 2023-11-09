import React, { useState } from 'react'
import {Button, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import Modal from '../components/Modal';

const User = () => {
    const [hide,setHide]= useState(false);
    const handleDataFromChild = (data) => {
        setHide(data);
      };

    return (
        <View style={styles.main}>
            {
            hide ? 
            <Modal sendDataToParent={handleDataFromChild} ></Modal> 
            : 
            <View style={{flex:1,justifyContent:'flex-end'}}>
            <Button
                title='Open Modal'
                onPress={()=>handleDataFromChild(true)}
                ></Button>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex : 1,
    },
    
    
})

export default User;