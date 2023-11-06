import React from 'react'
import { Text, View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';

{/*
    
*/}
const User = () : JSX.Element  => {

    const data = [];

    for (let i = 1; i <= 101; i++) {
      data.push({
        id: i,
        name: `Name ${i}`
      });
    }
    

    return (
        <View>
            <Text style={{color:'black',fontSize:30}}> Grid with Dynamic data</Text>
            <ScrollView style={{height : 780}}>
            <View
                style={styles.gridContainer}
            >
                {
                    data.map((item) =>{
                        return <Text style={styles.gridContainerText}>{item.name}</Text>
                    })
                }
                
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    gridContainer : {
        flex : 1,
        flexDirection :'row',
        flexWrap :'wrap',
        marginLeft:11
    },
    gridContainerText : {
        color : 'white',
        fontSize : 25,
        backgroundColor :'blue',
        margin : 5,
        padding :5,
        width : 120,
        height : 120,
        textAlign :'center',
        textAlignVertical :'center'
    }
})

export default User;