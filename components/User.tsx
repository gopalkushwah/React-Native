import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
import styles1 from './../style/style';

{/*
    
*/}

const User = () : JSX.Element => {
    return (
        <View>
            {/* Inline Style */}
            <Text style={{
                fontSize : 30,
                color : 'red'
            }}>hello</Text>

            {/* Intenal Style */}
            <Text style={styles.text}>Gopal</Text>

            {/* External Style */}
            <Text style={styles1.text}>Kushwah</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    text :{
        color : 'green',
        fontSize : 35,
        marginTop : 5
    }
})

export default User;