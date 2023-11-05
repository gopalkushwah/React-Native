import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
import Contacts from './Contacts';
{/*
     "state" refers to a fundamental concept that represents the data that a component can maintain and manage throughout its lifecycle.
      A component's state is used to store and track information that can change over time and affect how the component renders and behaves. 
      State is one of the key factors that make React Native applications dynamic and responsive.


        Local Component State: 
                State is a local feature of a component. 
                Each component can have its own state, and it's not shared with other components. 
                This means that changes to the state of one component don't affect the state of another component.

        Mutable: 
                State is mutable, which means you can update it within a component. 
                React Native provides a function called setState that allows you to update the state and trigger re-renders.

        Reactive: 
                When the state of a component changes, React Native automatically re-renders the component to reflect the new state. 
                This is what allows for dynamic and interactive user interfaces.

        Initialization: 
                You typically initialize state in a component's constructor or using a class property. 
                In functional components, you use the useState hook to manage state.

        Use Cases: 
                State is commonly used to manage variables like user input, application data, component visibility, and other dynamic information. 
                For example, you can use state to handle form input, control the visibility of modals or pop-ups, or manage application data fetched from an API.
*/}

const User = () => {
    
    const [name,setName] = useState("Ram");
    const [btnColor,setBtnColor] = useState("black");
    const handleName = () =>{
        name === "Ram" ? setName("Satyam") : setName("Ram");
        name === "Ram" ? setBtnColor("red") : setBtnColor("black");
    }
    return (
        <View >
            <Text 
            style={{
                fontSize : 30,
                marginBottom : 5
            }}>
                {name}</Text>
            <Button title='Change Name' color={btnColor} onPress={handleName}></Button>
        </View>
    )
}

export default User;