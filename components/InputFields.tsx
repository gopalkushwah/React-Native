import React from 'react'
import {TextInput,View} from 'react-native'

const InputField = () => {
  return(
      <View>
          {/*
            to create a multi line input field
          */}
          <TextInput 
            multiline={true}
            style ={styles.inputStyle}

            {/* 
              height will become of 5 lines only , it will take more then 5 line but it height will be of 5
            */}
            numberOfLines={5}
            
            ></TextInput>

        
      </View>

    
  )
}
