import { View,Image,Pressable } from "react-native";
import React from "react";

import User from "./components/User";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Message from "./components/Message";
import Groups from "./components/Goups";
import Calls from "./components/Calls";
import Community from "./components/Community";
import Status from "./components/Status";
// import MessageImage from "./assets/message.png";
// import GroupsImage from "./assets/community.png";
// import CallImage from "./assets/call.png";
// import StatusImage from "./assets/status.png";
// import UserImage from "./assets/user.png";
// import Menu from "./assets/blackmenu.png";

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
      screenOptions={{
        // tabBarShowLabel :false,
       
        tabBarLabelStyle:{
          fontSize:15,
          color :'black',
          fontWeight : '800'
        },
        
        
      }}
      >
        <Tab.Screen 
        name="Message"  
        component={Message}
        />
        <Tab.Screen
        name="Groups" component={Groups}/>
        <Tab.Screen
        name="Calls" component={Calls}/>
        <Tab.Screen
        name="Community" component={Community}/>
        <Tab.Screen
        name="Status" component={Status}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App