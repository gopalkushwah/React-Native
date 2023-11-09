import React from 'react'
import { View,Text,Button,StyleSheet } from 'react-native'

const Home = (props) => {
    return (
        <View style={styles.view} >
            <Text style={styles.text}>Hello , Login to continue</Text>
            <Button 
                title='Go To Login'
                color={'blue'}
                onPress={()=>props.navigation.navigate('Login')}
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

export default Home