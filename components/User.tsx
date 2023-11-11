import React, {useState ,useContext} from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Context from '../contexts/Context'
const User = () => {
    const [user, setUser] = useState()
    const context  = useContext(Context);


    return (
        <ScrollView>
        <View style={{margin:20}}>
            {/* <Text style={{fontSize : 25,color:"blue"}}>User Name</Text>
            <TextInput
                onChangeText={(text)=>context.updateState(text)}
                ></TextInput> */}
            
            <View>
                {/* <Pressable onPress={} style={{borderRadius:10,width : '100%',backgroundColor:'blue',padding : 12}}><Text style={{fontSize : 30,color :'white',fontWeight:'bold',textAlign : 'center'}}>Remove Data</Text></Pressable> */}
                <Text>state : {context.state}</Text>
            </View>
        </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    input : {
        fontSize:30,
        color:'black',
        borderWidth : 2,
        borderColor: 'blue',
        marginBottom : 20,
        borderRadius:10,
        paddingLeft : 20,
        paddingRight:20
    }
})


export default User;