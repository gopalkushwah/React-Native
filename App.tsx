import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import User from "./components/User";
import Home from "./components/Home";
import { Button, Image, Text, View } from "react-native";
import WhiteMenu from './assets/whitemenu.png';
import BlackMenu from './assets/blackmenu.png';
import Sun from './assets/sun.png';
import Moon from './assets/moon.png';

const Stack = createNativeStackNavigator();
const App = () => {

  const [mod ,setMod] = useState(false);
  const [modColor ,setModColor] = useState({bg : 'black',cl : 'white'});
  return (
    <NavigationContainer>
      <Stack.Navigator
        
        screenOptions={{
          headerTitle:()=><Text style={{height : 40}} onPress={()=>console.warn("clicked")}><Image 
              source={mod ? BlackMenu : WhiteMenu}
              style={{width : 30,height : 30}}
            ></Image>
          </Text>,
          headerRight : ()=><View style={{flexDirection : 'row'}} >
          <Text style={{height : 40}} onPress={()=>{
              setMod(!mod);
              setModColor(modColor.bg === 'black' ? {bg:'white',cl:'black'} : {bg:'black',cl:'white'})
            }}><Image 
            source={mod ? Sun : Moon}
            style={{width : 30,height : 30}}
              />
          </Text>
          <Text style={{height : 40,marginLeft : 20}} onPress={()=>{
              setMod(!mod);
              setModColor(modColor.bg === 'black' ? {bg:'white',cl:'black'} : {bg:'black',cl:'white'})
            }}><Image 
            source={mod ? Sun : Moon}
            style={{width : 30,height : 30}}
              />
          </Text>
          </View>
          ,
          
          headerStyle:{
            backgroundColor : modColor.bg
          },
          headerTintColor:modColor.cl,
          headerTitleStyle:{
            fontSize :30,
            fontWeight : 'bold'
          }
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="User" component={User}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App