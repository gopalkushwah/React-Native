import React, { useState } from 'react'
import {Button, StyleSheet, View,Modal, Text} from 'react-native';

const User = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <View style={styles.main}>
            <Modal
                transparent={true}
                visible={showModal}
                animationType='slide'
            >
                <View style={styles.modalView}>
                    <View style={styles.modalInnerView}>
                        <Text style={styles.modalText}>Jai Shree Ram 🚩</Text>
                        <Button title='Close' onPress={()=>setShowModal(false)}></Button>
                    </View>  
                </View>
            </Modal>
            <View
                style={styles.openModalView}
            >
                <Button title='Open Modal' onPress={()=>setShowModal(true)}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        flex : 1,
        
    },
    openModalView:{
        flex : 1,
        justifyContent :'flex-end'
    },
    modalView : {
        flex : 1,
        justifyContent :'center',
        alignItems : 'center'
    },
    modalInnerView : {
        backgroundColor : 'white',
        padding : 30,
        shadowColor : 'black',
        elevation : 30,
        borderRadius : 5
    },
    modalText : {
        color : 'black',
        marginBottom : 10,
        fontSize : 30
    }
})

export default User;