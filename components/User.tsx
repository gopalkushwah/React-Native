import React, { useState } from 'react'
import {StyleSheet, View, Pressable, Alert, Text} from 'react-native';
{/*
    the Pressable component is used to create interactive and touchable elements that respond to user presses and gestures. 
    It allows you to wrap other components and provide touchable behavior to them, similar to buttons, images, or any other view elements. 
    The Pressable component is highly customizable and provides options for handling various touch events.
*/}
const User = () => {
    const [onHoverInEff, setOnHoverIn] = useState('red')
    return (
        <View style={styles.main}>
            <View>
                <Pressable
                    onPress={()=>{
                        Alert.alert("On Press called")
                        

                    }}
                    onLongPress={()=>{
                        Alert.alert("On Long Press called");
                        setOnHoverIn('black');
                    }}
                    onHoverIn={()=>{
                        setOnHoverIn('black');
                    }}
                    delayLongPress={500}
                    // onPressIn={()=>{
                    //     Alert.alert("On Press In called")
                    // }}
                    // onPressOut={()=>{
                    //     Alert.alert("On Press Out called")
                    // }}
                    android_ripple={{ color: 'pink' }}
                    style={{
                        backgroundColor:onHoverInEff,
                        borderRadius : 5,
                        
                    }}
                >
                    <Text style={{
                        fontSize : 30,
                        fontWeight :'bold',
                        color:'white',
                        padding : 5,
                        
                    }}>Pressable Button</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex : 1,
        justifyContent :'center',
        alignItems:'center'
    },
    
    
})

export default User;