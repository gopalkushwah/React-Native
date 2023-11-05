import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  
 } from "react-native";

 const App = () : JSX.Element =>{

  const handleButtonPress = () => {
    Alert.alert('Button Pressed', 'Hello from React Native!');
  };

  return(
    <View style={{
      borderRadius : 20,
      margin :10
    }}>
      {/* 
        the <Button> component is used for creating buttons or interactive elements within your mobile application. 
        It is a core component for handling user interaction and providing a way for users to trigger actions when pressed. 
        The <Button> component is typically used for actions like submitting a form, navigating to another screen, or triggering some application logic.
      */}

      <Button 
        title="Hello"
        color="red"
        onPress={()=>{
          Alert.alert("जय श्री राम   🚩");
        }}
        accessibilityLabel="Press this button"
        
      ></Button>
      <View 
        style={{
          marginTop : 5
        }}
      >
        <Button 
          title="Click me"
          color="red"
          onPress={handleButtonPress}
          accessibilityLabel="Press this button"
          // disabled={true}
          disabled={false}
          testID="my-button"
        ></Button>
      </View>
      
      
    </View>
  )
 }


 export default App;