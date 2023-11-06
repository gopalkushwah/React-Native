import React from 'react'
import { Text, View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';

{/*
    
*/}
// const data = [
//     {
//         id : 1,
//         name : 'Gopal'
//     },
//     {
//         id : 2,
//         name : 'Anish'
//     },
//     {
//         id : 3,
//         name : 'Satyam'
//     },
//     {
//         id : 4,
//         name : 'Ram'
//     },
//     {
//         id : 5,
//         name : 'Sumit'
//     },
//     {
//         id : 6,
//         name : 'Ritik'
//     },
//     {
//         id : 7,
//         name : 'Harsh'
//     },
//     {
//         id : 8,
//         name : 'Himanshu'
//     },
//     {
//         id : 9,
//         name : 'Girraj'
//     },
//     {
//         id : 10,
//         name : 'Ritik Agrawal'
//     },
//     {
//         id : 11,
//         name : 'Ritik Agrawal'
//     },
//     {
//         id : 12,
//         name : 'Ritik Agrawal'
//     },
//     {
//         id : 13,
//         name : 'Ritik Agrawal'
//     },
// ]
const User = () : JSX.Element  => {

    const data = [];

    for (let i = 1; i <= 1000; i++) {
      data.push({
        id: i,
        name: `Name ${i}`
      });
    }
    

    return (
        <View style={{
            padding : 10
        }}>
            
            <Text style={{fontSize:30}}>Custom List using map method</Text>
            
            <ScrollView style={{marginBottom:30}}>
            {
                data.map((item)=>{
                   return(
                   <Text style={{fontSize:20,backgroundColor:'red',borderColor:'black',borderWidth:1,marginBottom:40,padding : 5,color:'white',borderRadius:5}}>{item.name}</Text>
                   )
                })
            }
            </ScrollView>
            

            {/* FlatList mentains scrollable view by defualt, we just need to set its height */}
            {/* <FlatList style={{
                height: 700
            }}
                data={data}
                renderItem={({item})=>(
                    <Text style={{fontSize:20,backgroundColor:'red',borderColor:'black',borderWidth:1,marginBottom:40,padding : 5,color:'white',borderRadius:5}}>{item.name}</Text>
                )}
            /> */}
            
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