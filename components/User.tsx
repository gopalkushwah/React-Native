import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TextInput, ScrollView, SectionList, Button } from 'react-native';
import styles1 from './../style/style';

{/*
    
*/}
class User extends Component {
    
    clickMe = () =>{
        console.warn("clicked");
        
    }

    render() {
        return (
            <View style={
                {
                    margin: 5,
                    height : 810
                 }}>
                <Text style={{color:'red',fontSize:30}}>SectionList</Text>
               <Button 
               title='Click Me'
               onPress={this.clickMe}
               ></Button>
            </View>
        )
    }
}


export default User;