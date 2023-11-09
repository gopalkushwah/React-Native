import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const Login = (props) => {
  return (
    <View style={styles.view} >
        <Text style={styles.text}>Hello , Login to continue</Text>
        <Button 
            title='Login'
            color={'blue'}
            onPress={()=>props.navigation.navigate('User')}
        ></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    view : {
        flex : 1,
        backgroundColor : 'red',
        alignItems:'center',
        justifyContent :'center'
    },
    text : {
        color :'white',
        fontSize:30
    }
})
export default Login