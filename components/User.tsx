import React from 'react'
import { Text, View } from 'react-native';
import Contacts from './Contacts';


const User = (props) => {
  return (
    <View style={{
        // width : '50%',
        margin : 10,
        backgroundColor : 'white',
        flex: 1, // Each grid item takes equal space
        borderWidth: 1, // Optional border for visualization
        borderColor: 'black', // Optional border color for visualization
        // height : '10%',
        alignItems : 'center',
        shadowColor: 'black', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y)
        shadowOpacity: 1, // Shadow opacity (0 to 1)
        shadowRadius: 5, // Shadow radius
        borderRadius : 8
    }}>
        <Text style={{color : 'black'}}>Name : {props.name}</Text>
        <Text style={{color : 'black'}}>Age : {props.age}</Text>
        <Contacts mobile={props.mobile}></Contacts>
    </View>
  )
}

export default User;