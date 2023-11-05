import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
import Contacts from './Contacts';
{/*
    "props" is short for "properties," and it is a mechanism for passing data from a parent component to a child component. 
    Props allow you to transmit information and configuration to child components, which they can then use to render content, handle user interactions, or perform various tasks. 
    Props are a fundamental concept in React and React Native, and they play a key role in building modular and reusable components.

        Here are some important aspects of props in React Native:

        Data Passing: 
                Props are used to pass data from a parent component to a child component. 
                This data can include variables, objects, functions, and other values.

        Immutable: 
                Props are read-only and cannot be modified by the child component. 
                They are meant for one-way communication from parent to child.

        Dynamic Rendering: 
                Props are often used to make components more dynamic. 
                By passing different props, you can control how a child component renders and behaves.

        Customization: 
                You can customize the behavior and appearance of a component by adjusting the props passed to it.
*/}

const User = (props) : JSX.Element => {
    return (
        <View >
            <Text style={{
                color: 'white',
                fontSize : 30,
                alignItems :'center',
                padding : 10,
                marginBottom : 5,
                backgroundColor : 'black'
            }}>
                {props.name}
            </Text>
            <Text style={{
                color: 'white',
                fontSize : 30,
                alignItems :'center',
                padding : 10,
                marginBottom : 5,
                backgroundColor : 'red'
            }}>
                {props.age}
            </Text>
            <Text style={{
                color: 'white',
                fontSize : 30,
                alignItems :'center',
                padding : 10,
                marginBottom : 5,
                backgroundColor : 'green'
            }}>
                {props.address}
            </Text>
        </View>
    )
}

export default User;