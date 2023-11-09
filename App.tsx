import { View,Image,Pressable } from "react-native";
import React from "react";

import User from "./components/User";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Message from "./components/Message";
import Groups from "./components/Goups";
import Calls from "./components/Calls";
import Community from "./components/Community";
import Status from "./components/Status";
import MessageImage from "./assets/message.png";
import GroupsImage from "./assets/community.png";
import CallImage from "./assets/call.png";
import StatusImage from "./assets/status.png";
import UserImage from "./assets/user.png";
import Menu from "./assets/blackmenu.png";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
      screenOptions={{
        // tabBarShowLabel :false,
        headerTitleStyle :{
          fontSize : 20
        },
        headerTitle : ()=><Pressable
        onPress={()=>console.warn("Hellow")}
        >
            <Image style={{width :35,height:35}} source={Menu}></Image>
        </Pressable>,
        tabBarLabelStyle:{
          fontSize:15,
        },
        tabBarBadge:'1',
        tabBarBadgeStyle : {
          backgroundColor:'green'
        },
        
        
      }}
      >
        <Tab.Screen 
        options={{
          tabBarIcon : () => <View>
            <Image style={{width :35,height:35}} source={MessageImage}></Image>
          </View>,
          
        }}
        
        name="Message"  
        component={Message}
        />
        <Tab.Screen
        options={{
          tabBarIcon : () => <View>
            <Image style={{width :35,height:35}} source={UserImage}></Image>
          </View>
        }}
        
        name="Groups" component={Groups}/>
        <Tab.Screen
        options={{
          tabBarIcon : () => <View>
            <Image style={{width :35,height:35}} source={CallImage}></Image>
          </View>
        }}
        name="Calls" component={Calls}/>
        <Tab.Screen
        options={{
          tabBarIcon : () => <View>
            <Image style={{width :35,height:35}} source={GroupsImage}></Image>
          </View>
        }}
        name="Community" component={Community}/>
        <Tab.Screen
        options={{
          tabBarIcon : () => <View>
            <Image style={{width :35,height:35}} source={StatusImage}></Image>
          </View>
        }}
        name="Status" component={Status}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App