import React from "react";
import MyConponent from "./MyConponent";
import { 
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList
 } from "react-native";
import Navbar from "./Navbar";

 const data = [
  { key: 'item1', title: 'Item 1' },
  { key: 'item2', title: 'Item 2' },
  { key: 'item3', title: 'Item 3' },
  { key: 'item4', title: 'Item 3' },
  { key: 'item5', title: 'Item 3' },
  { key: 'item6', title: 'Item 3' },
  { key: 'item7', title: 'Item 3' },
  { key: 'item8', title: 'Item 3' },
  { key: 'item9', title: 'Item 3' },
  { key: 'item10', title: 'Item 3' },
  { key: 'item11', title: 'Item 3' },
  { key: 'item12', title: 'Item 3' },
  { key: 'item13', title: 'Item 3' },
  { key: 'item14', title: 'Item 3' },
  { key: 'item15', title: 'Item 3' },
  { key: 'item16', title: 'Item 3' },
  { key: 'item17', title: 'Item 3' },
  { key: 'item18', title: 'Item 3' },
  { key: 'item19', title: 'Item 3' },
  { key: 'item20', title: 'Item 3' },
  
  // Add more items here
];


 const App = () =>{
  return(
      <View style={styles1.container}>
      <Navbar />
      {/* Your app content goes here */}
      <FlatList
      data={data}
      renderItem={({item}) =>(
        <Text style={
        styles.text1
        }>{item.title}</Text>
      )}
      />
    </View>
  )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30, // You can set the font size here (in pixels)
    textAlign : 'center',
    color :'white'
  },
  text1: {
    fontSize: 30, // You can set the font size here (in pixels)
    color :'black'
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
});

 export default App;