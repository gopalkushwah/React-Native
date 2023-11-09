import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import User from "./components/User";
import Home from "./components/Home";


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor : 'gold'
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize :30,
            fontWeight : 'bold'
          }
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerStyle:{
              backgroundColor : 'blue'
            },
            headerTintColor:'white',
            headerTitleStyle:{
              fontSize :30,
              fontWeight : 'bold'
            }
          }}

        />
        <Stack.Screen name="User" component={User}
        options={{
          headerStyle:{
            backgroundColor : 'green'
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize :20,
            fontWeight : 'bold'
          }
        }}
        />
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App