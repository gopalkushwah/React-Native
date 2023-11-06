import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';

{/*
    the FlatList component is a versatile and efficient way to render a scrollable list of items. 
    It's particularly useful for rendering large lists of data, as it only renders the items that are currently visible on the screen, which significantly improves performance. 
    FlatList is the recommended choice for building lists, and it can be used to display both simple and complex lists with various items.

    FlatList is inherently scrollable by default. 
    It's designed to handle long lists of items, and scrolling is an inherent behavior. 
    However, you can control the scrollability of a FlatList through its container and by using its parent components. 


    The FlatList component in React Native provides a variety of attributes (props) that allow you to customize its behavior and appearance. 
    Here are some of the commonly used attributes for FlatList:

        data (Array):
        
        An array of data that you want to render in the list.
        renderItem (({ item, index }) => React.Node):
        
        A function that returns the component to render for each item in the data array. It receives the item data and its index as parameters.
        keyExtractor ((item, index) => string):
        
        A function to extract a unique key for each item in the data array. It's used to help React identify items when they change.
        horizontal (boolean, default: false):
        
        Determines whether the list should be horizontal (scrollable from left to right) or vertical (scrollable from top to bottom).
        numColumns (number):
        
        Specifies the number of columns in a grid-like layout. Use this for grid-style lists.
        onEndReached (() => void):
        
        A callback function that is called when the user reaches the end of the list. Useful for implementing infinite scrolling.
        onRefresh (() => void):
        
        A callback function that is called when the user initiates a refresh gesture (pull-to-refresh). Used in combination with the refreshing prop.
        refreshing (boolean):
        
        Controls the visibility of a refresh indicator. Set to true to show a refresh indicator, and handle the refresh in the onRefresh callback.
        ListHeaderComponent (React.Component):
        
        A component to render at the top of the list, outside the scrolling area.
        ListFooterComponent (React.Component):
        
        A component to render at the bottom of the list, outside the scrolling area.
        ItemSeparatorComponent (React.Component):
        
        A component to render between list items.
        columnWrapperStyle (object):
        
        Additional styles to apply to the container of each column in a grid layout.
        ListEmptyComponent (React.Component):
        
        A component to render when the data array is empty.
        initialNumToRender (number):
        
        The number of items to render in the initial batch.
        onEndReachedThreshold (number, default: 0.1):
        
        A threshold that determines when the onEndReached callback should be triggered, based on the distance the user has scrolled.
        extraData (any):
        
        A value that can be passed to force a re-render of the FlatList when it changes. Useful when you want to ensure reactivity when the data changes.
        ...other props:
        
        FlatList also supports other common props like style, contentContainerStyle, onScroll, and more, which are inherited from the ScrollView component.
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



            
            {/*
                    list with grid pattern using numColumns , 
                    we can use the numColumns prop to specify the number of columns you want in a row
            */}
            {/*             
            <FlatList style={{
                height: 730
            }}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({item})=>(
                    <View style={styles.item}>
                    <Text style={styles.listText}>{item.name}</Text>
                    </View>
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
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderTopLeftRadius :30,
        borderBottomRightRadius : 30,
        
      },
})

export default User;
