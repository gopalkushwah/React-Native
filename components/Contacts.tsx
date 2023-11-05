import React from 'react'
import { Text, View } from 'react-native'

const Contacts = (props) => {
  return (
    <View>
        <Text>Mobile : {props.mobile}</Text>
    </View>
  )
}

export default Contacts