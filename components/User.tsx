import React from 'react'
import { Text, View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';

{/*
    
*/}
const User = () : JSX.Element  => {

    const data = [];

    for (let i = 1; i <= 50; i++) {
      data.push({
        id: i,
        name: `Jaithalal ${i}`,
        email: `jaithalal${i}@gmail.com`
      });
    }
    

    return (
        <View style={
            {
                margin: 5,
                height : 810
             }}>
            <Text style={{color:'black',fontSize:30}}>Componet in loop with FlatList</Text>
            <FlatList 
            data={data}
            renderItem={({item})=>{
                return(
                    <UserData item={item}/>
                )
            }}
            />
        </View>
    )
}

const UserData = (props: { item: any; }) =>{
    const item = props.item;
    return(
        <View style={styles.box}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize : 20,
        color :'black',
        flex : 1,
        margin : 2
    },
    box:{
        flexDirection :'row',
        borderWidth : 1,
        borderColor:'black',
        padding : 4,
        marginBottom : 5,
        borderRadius : 10
    },
})

export default User;