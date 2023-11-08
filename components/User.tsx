import React, { useState } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const skills = [
    {
        id : 1,
        skill : 'JAVA'
    },
    {
        id : 2,
        skill : 'PYTHON'
    },
    {
        id : 3,
        skill : 'NODE'
    },
    {
        id : 4,
        skill : 'HTML,CSS,JS'
    },
    {
        id : 5,
        skill : 'REACT.JS'
    },
    {
        id : 6,
        skill : 'REACT-NATIVE.JS'
    },

]
const User = () => {
    const [selectedRadio, setSelectedRadio] = useState(1);

    return (
        <View style={styles.main}>
          
            {
                skills.map((item,index)=>{
                         return   <TouchableOpacity
                        onPress={()=>setSelectedRadio(index)}
                    >    
                        <View style={styles.radioWrapper}>
                            <View style={styles.radioBtn}>
                                {
                                    selectedRadio === index ? <View style={styles.radioBtnIn}></View> : null
                                }
                            </View>
                            <Text style={styles.radioText}>{item.skill}</Text>
                        </View>
                        <Text></Text>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex : 1,
        // alignItems :'center',
        justifyContent : 'center',
        marginLeft : 20
    },
    radioBtn : {
        height : 40,
        width :60,
        borderColor : 'red',
        borderWidth : 1,
        borderRadius : 20,
        alignItems: 'center',
        justifyContent :'center',
        shadowColor :'red',
        elevation : 20,
        shadowOffset : {width : -20 ,height :-20}
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
        flexDirection:'row',
        
    }
})

export default User;