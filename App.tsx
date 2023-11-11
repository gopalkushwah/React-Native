import React from "react";
import { ScrollView, Text, View} from "react-native";
import Header from "./components/Header";
import Product from "./components/Product";
import Kohli from './assets/kohli.jpeg'

const App = () => {
  
  const products = [
    {
        id : 1,
        name : 'Sumsung Mobile',
        color :'white',
        price : 30000,
        image : Kohli
    },
    {
        id : 2,
        name : 'Realme Mobile',
        color :'black',
        price : 50000,
        image : Kohli
    },
    {
        id : 3,
        name : 'Redme Mobile',
        color :'blue',
        price : 25000,
        image : Kohli
    },
    {
        id : 4,
        name : 'One Plus Mobile',
        color :'white',
        price : 56000,
        image : Kohli
    },
    {
        id : 5,
        name : 'I Phone 14',
        color :'red',
        price : 100000,
        image : Kohli
    },
    {
        id : 6,
        name : 'Realme 5i',
        color :'white',
        price : 12000,
        image : Kohli
    },
    {
        id : 7,
        name : 'Nord ce 3',
        color :'white',
        price : 30000,
        image : Kohli
    },
    {
        id : 8,
        name : 'Sumsung Mobile',
        color :'white',
        price : 30000,
        image : Kohli
    },
    {
        id : 9,
        name : 'Sumsung Mobile',
        color :'white',
        price : 30000,
        image : Kohli
    },
    {
        id : 10,
        name : 'Sumsung Mobile',
        color :'white',
        price : 30000,
        image : Kohli
    },
    {
        id : 11,
        name : 'Sumsung Mobile',
        color :'white',
        price : 30000,
        image : Kohli
    },
]
  return (
      <View style={{flex : 1}}>
        <Header/>
        <ScrollView>
        {
        products.map((item)=>(
            <Product item={item}/>
          ))
       }
      </ScrollView>
    
      </View>
    
  )
}

export default App