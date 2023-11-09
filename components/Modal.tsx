import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Modal = (props) => {
    const sendDataToParent = () => {
        props.sendDataToParent(false);
      };
  return (
    <View style={styles.modal}>
        <View style={styles.body}>
            <View style={styles.innerBody}>
                <Text style={styles.bodyText}>Hello Everyone.....</Text>
                <Text style={styles.bodyText}>Gopal Is Here.....</Text>
                <Text style={styles.bodyText}>Developing an awesome application</Text>
                <Button
                    title='Close'
                    onPress={sendDataToParent}
                ></Button>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    modal : {
        // flex : 1,
        backgroundColor : 'rgba(0,0,0,0.2)',
        zIndex : 10000,
        justifyContent :'center',
        alignItems:'center',
        height:'100%'
    },
    body:{
        backgroundColor : 'white',
        padding: 20,
        width : 300,
        height : 200,
        justifyContent :'center',
        borderRadius : 10
    },
    bodyText :{
        color :'black',
        fontSize : 20

    }
})
export default Modal