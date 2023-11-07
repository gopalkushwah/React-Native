import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const User = () => {
    return (
        <View style={styles.mainContainer}>
           {/* <Text style={{color:'black',fontSize : 50}}>hello</Text> */}
           <View style={styles.box1}>
                <View style={styles.box11}>
                <View style={[styles.box12,{backgroundColor : 'orange'}]}>
                        
                        </View>
                        <View style={styles.box13}>
                            
                        </View>
                </View>
                <View style={styles.box12}>
                    <View style={styles.box11}>
                    
                    </View>
                    <View style={[styles.box12,{backgroundColor : 'orange'}]}>
                        
                    </View>
                    <View style={styles.box13}>
                        
                    </View>
                </View>
                <View style={styles.box13}>
                <View style={styles.box11}>
                    
                    </View>
                    <View style={[styles.box12,{backgroundColor : 'orange'}]}>
                        
                    </View>
                </View>
           </View>
           <View style={styles.box2}>
           <View style={styles.box13}>
                    
                    </View>
                    <View style={styles.box12}>
                    
                </View>
           </View>
           <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        // height : '100%',
        backgroundColor : 'green'
    },
    box1 : {
        flex : 2,
        backgroundColor : 'red',
        flexDirection :'row'
    },
    box2 : {
        flex : 1,
        backgroundColor : 'blue',
        flexDirection :'row'
    },
    box3 : {
        flex : 1,
        backgroundColor : 'yellow'
    },
    box11 : {
        flex : 1,
        backgroundColor : 'blue',
        margin : 5
    },
    box12 : {
        flex : 1,
        backgroundColor : 'black',
        margin : 5
    },
    box13 : {
        flex : 1,
        backgroundColor : 'skyblue',
        margin : 5
    }
})

export default User;