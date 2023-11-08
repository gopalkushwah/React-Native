import React, { useState } from 'react'
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const User = () => {
    const [selectedRadio, setSelectedRadio] = useState(1);

    return (
        <View style={styles.main}>
          
            <TouchableOpacity
                onPress={()=>setSelectedRadio(1)}
            >    
                <View style={styles.radioWrapper}>
                    <View style={styles.radioBtn}>
                        {
                            selectedRadio === 1 ? <View style={styles.radioBtnIn}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
                onPress={()=>setSelectedRadio(2)}
            >
                <View style={styles.radioWrapper}>
                    <View style={styles.radioBtn}>
                        {
                            selectedRadio === 2 ? <View style={styles.radioBtnIn}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 2</Text>
                </View>
            </TouchableOpacity>
            <Text></Text>
            
            <TouchableOpacity
                onPress={()=>setSelectedRadio(3)}
            >
                <View style={styles.radioWrapper}>
                    <View style={styles.radioBtn}>
                        {
                            selectedRadio === 3 ? <View style={styles.radioBtnIn}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 3</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex : 1,
        alignItems :'center',
        justifyContent : 'center'
    },
    radioBtn : {
        height : 40,
        width : 40,
        borderColor : 'red',
        borderWidth : 1,
        borderRadius : 20,
        alignItems: 'center',
        justifyContent :'center'
    },
    radioBtnIn:{
        height : 30,
        width : 30,
        backgroundColor : 'red',
        borderRadius : 15,
    },
    radioText : {
        fontSize : 20,
        color :'black',
        marginLeft : 20
    },
    radioWrapper:{
        alignItems:'center',
        flexDirection:'row'
    }
})

export default User;