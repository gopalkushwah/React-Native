import React, { useState } from 'react'
import {ActivityIndicator, Button, StyleSheet, View} from 'react-native';

const User = () => {
    const [showActivityIndicator, setShowActivityIndicator] = useState(false);
    
    const displayActivitiIndicator = () =>{
        setShowActivityIndicator(true);


        // just think we are calling an api here to fetch data from db and it will take time of 5 second
        setTimeout(()=>{
            setShowActivityIndicator(false);
        },5000)

    }
    return (
        <View style={styles.main}>
          {/* <ActivityIndicator size={"small"} color={"red"} animating={true}></ActivityIndicator>
          <ActivityIndicator size={"large"} color={"blue"} animating={true}></ActivityIndicator> */}


          {/* <ActivityIndicator size={50} color={"red"} animating={true}></ActivityIndicator> */}

{/* 
          <ActivityIndicator size={100} color={"black"} animating={showActivityIndicator}></ActivityIndicator>
          <Button 
            title="click me"
            onPress={displayActivitiIndicator}
          ></Button> */}

         {showActivityIndicator ? <ActivityIndicator size={100} color={"black"} ></ActivityIndicator> : null}
          <Button 
            title="click me"
            onPress={displayActivitiIndicator}
          ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex : 1,
        alignItems :'center',
        justifyContent : 'center',
    }
})

export default User;