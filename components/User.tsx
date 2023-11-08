import React, { useState } from 'react'
import {StyleSheet, View,Platform, Button, Text} from 'react-native';

const User = () => {

    const [platform , setPlatform] = useState('android');
    return (
        <View style={[styles.main, {backgroundColor :  Platform.OS === platform ? 'red' :'blue'}]}>
            <View 
                style={{
                    backgroundColor :'red'
                }}
            >
                <Button
                title="Click Me"
                color={'red'}
                onPress={()=>{
                    setPlatform( platform === 'android' ? 'ios' : 'android');
                }}
                ></Button>
                
            </View>
            <Text
                    style={{
                    color :'white',
                    fontSize : 30
                }}
                >{platform}</Text>
            <Text
                    style={{
                    color :'white',
                    fontSize : 30
                }}
                >Platform Version : {Platform.Version}</Text>
            {/* <Text
                    style={{
                    color :'white',
                    fontSize : 30
                }}
                >Platform : {JSON.stringify(Platform)}</Text> */}
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