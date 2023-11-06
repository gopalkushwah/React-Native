import React from 'react'
import { Text, View, StyleSheet, FlatList, TextInput, ScrollView, SectionList } from 'react-native';
import styles1 from './../style/style';

{/*
    
*/}
const User = () : JSX.Element  => {
    // const userData = [
    //     {
    //         id : 1,
    //         name : 'Name1',
    //         data : ['Arr1','Arr2','Arr3','Arr4','Arr5']
    //     },
    //     {
    //         id : 2,
    //         name : 'Name2',
    //         data : ['Arr5','Arr4','Arr3','Arr2','Arr1']
    //     },
    //     {
    //         id : 3,
    //         name : 'Name3',
    //         data : ['Arr1','Arr2','Arr3','Arr4','Arr5']
    //     },
    //     {
    //         id : 4,
    //         name : 'Name4',
    //         data : ['Arr5','Arr4','Arr3','Arr2','Arr1']
    //     },
    //     {
    //         id : 5,
    //         name : 'Name5',
    //         data : ['Arr1','Arr2','Arr3','Arr4','Arr5']
    //     },
    //     {
    //         id : 6,
    //         name : 'Name6',
    //         data : ['Arr5','Arr4','Arr3','Arr2','Arr1']
    //     },
    //     {
    //         id : 7,
    //         name : 'Name7',
    //         data : ['Arr1','Arr2','Arr3','Arr4','Arr5']
    //     },
    //     {
    //         id : 8,
    //         name : 'Name8',
    //         data : ['Arr5','Arr4','Arr3','Arr2','Arr1']
    //     },
    //     {
    //         id : 9,
    //         name : 'Name9',
    //         data : ['Arr1','Arr2','Arr3','Arr4','Arr5']
    //     },
    //     {
    //         id : 10,
    //         name : 'Name10',
    //         data : ['Arr5','Arr4','Arr3','Arr2','Arr1']
    //     },



    // ];

    
    let d1 = [],d2 = [];
    for(let i = 1 ; i< 20 ;i++){
        const innerArray = [];
        for (let j = 1; j <= 5; j++) {
            innerArray.push(`Arr ${j}`);
        }
        d1.push({
            id : i,
            name : `Name ${i}`,
            data : innerArray
        })
    }
    return (
        <View style={
            {
                margin: 5,
                height : 810
             }}>
            <Text style={{color:'red',fontSize:30}}>SectionList</Text>
           <SectionList
                sections={d1}
                renderItem={({item,index}) => (
                    <Text style={styles.li}>{index+1} . {item}</Text>
                )}
                renderSectionHeader={({section}) => (
                    <Text style={styles.header}>{section.id} : {section.name}</Text>
                )}
           />
        </View>
    )
}


const styles = StyleSheet.create({
    li:{
        fontSize : 20,
        color :'black',
        marginLeft : 30
    },
    header:{
        fontSize : 20,
        color :'red',
    },
})

export default User;