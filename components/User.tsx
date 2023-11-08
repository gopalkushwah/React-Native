import React, { useState } from 'react'
import {StyleSheet, View, Pressable, Alert, Text, StatusBar, Button} from 'react-native';
{/*
    the Pressable component is used to create interactive and touchable elements that respond to user presses and gestures. 
    It allows you to wrap other components and provide touchable behavior to them, similar to buttons, images, or any other view elements. 
    The Pressable component is highly customizable and provides options for handling various touch events.
*/}
const User = () => {
    const [hide, setHideStatuBar] = useState(false);
    const [colorStatus, setColorStatuBar] = useState('red');
    const [animatedStatus, setAnimatedStatuBar] = useState(false);
    const [barStyleStatus, setBarStyleStatuBar] = useState('default');
    return (
            <View style={styles.main}>
                <StatusBar
                 backgroundColor={colorStatus} 
                 animated={animatedStatus}
                 hidden={hide}
                // barStyle={'dark-content'}
                // barStyle={'light-content'}
                barStyle={barStyleStatus}  //light-content
                 ></StatusBar>
                 <Button
                 title='Change Status Bar Color'
                 onPress={()=>{
                    setColorStatuBar(colorStatus === 'red' ? 'blue' : 'red');
                 }}
                 ></Button>
                 <Text></Text>
                 <Button
                 title='Hide Status Bar'
                 onPress={()=>{
                    setHideStatuBar(!hide);
                 }}
                 ></Button>
                 <Text></Text>
                 <Button
                 title='Change Bar Style'
                 onPress={()=>{
                    setBarStyleStatuBar(barStyleStatus === 'default' ? 'dark-content' : 'default');
                 }}
                 ></Button>
                 <Text></Text>
                 <Button
                 title='Set Animated'
                 onPress={()=>{
                    setAnimatedStatuBar(!animatedStatus);
                 }}
                 ></Button>
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