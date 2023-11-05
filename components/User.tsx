import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';

{/*
    
*/}
const data = [
    {
        id : 1,
        name : 'Gopal'
    },
    {
        id : 2,
        name : 'Anish'
    },
    {
        id : 3,
        name : 'Satyam'
    },
    {
        id : 4,
        name : 'Ram'
    },
    {
        id : 5,
        name : 'Sumit'
    },
    {
        id : 6,
        name : 'Ritik'
    },
    {
        id : 7,
        name : 'Harsh'
    },
    {
        id : 8,
        name : 'Himanshu'
    },
    {
        id : 9,
        name : 'Girraj'
    },
    {
        id : 10,
        name : 'Ritik Agrawal'
    },
]
const User = () : JSX.Element  => {

    return (
        <View style={{
            padding : 10
        }}>
            <Text style={{fontSize:30}}>List with FlatList</Text>
            <FlatList
            data={data}
            renderItem={({item})=>(
                <Text style={styles.listText}>{item.name}</Text>
            )}
            keyExtractor={item=>item.id}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle : {
        fontSize : 20,
        color : '#000',
        borderColor : 'black',
        borderWidth : 1,
        borderRadius : 5,
        marginBottom : 12,
        paddingLeft : 15,
        
    },
    listText : {
        padding : 10,
        fontSize : 20,
        color : 'white',
        backgroundColor : 'red',
        marginBottom : 2,
        borderTopLeftRadius :15,
        borderBottomRightRadius : 15
    }
})

export default User;