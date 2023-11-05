import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

{/*
    The `TextInput` component in React Native supports various attributes and props to customize its behavior and appearance. Here are some of the most commonly used attributes for the `TextInput` component:

1. value (string):
   - Sets the initial value of the input field. Use this to provide a default value or to bind the input to a state variable.

2. onChangeText((text: string) => void):
   - A callback function that is called when the text input changes. It receives the current text value as an argument.

3. placeholder (`string`):
   - Displays a placeholder text in the input field to provide a hint to the user about what to enter.

4. placeholderTextColor** (`string`):
   - Sets the color of the placeholder text.

5. autoFocus (`boolean`):
   - Determines whether the input field should be focused automatically when the component mounts.

6. editable (`boolean`):
   - Controls whether the input is editable. Setting it to `false` makes the input read-only.

7. keyboardType (`'default' | 'numeric' | 'email-address' | 'phone-pad' | ...`):
   - Specifies the type of keyboard to display on mobile devices, depending on the input type (e.g., numeric, email, phone, etc.).

8. secureTextEntry (`boolean`):
   - If set to `true`, the text entered into the input is obscured for sensitive data like passwords.

9. maxLength (`number`):
   - Sets the maximum number of characters that can be entered into the input field.

10. autoCapitalize (`'none' | 'sentences' | 'words' | 'characters'`):
    - Controls the auto-capitalization behavior of the input.

11. autoCorrect (`boolean`):
    - Determines whether the input field should perform auto-correction for misspelled words.

12. multiline (`boolean`):
    - Allows the input field to accept multiple lines of text, making it a multiline text input.

13. numberOfLines (`number`):
    - Specifies the number of lines displayed in a multiline input.

14. onFocus (`() => void`):
    - A callback function that is called when the input field gains focus (becomes active).

15. onBlur (`() => void`):
    - A callback function that is called when the input field loses focus (becomes inactive).

16. onEndEditing (`(event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void`):
    - A callback function that is called when the user ends editing the text input.

17. onSubmitEditing(`(event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void`):
    - A callback function that is called when the user submits the text input (e.g., presses the return/submit key).

18. returnKeyType(`'done' | 'go' | 'next' | 'search' | ...`):
    - Specifies the text displayed on the keyboard return key (e.g., "Done," "Go," "Next," "Search," etc.).

19. style(`object`):
    - Defines the styles for the input field.

20. ...other props:
    - The `TextInput` component also supports other common props such as `style`, `onPress`, `onBlur`, and so on, which are inherited from the `View` component.

You can use these attributes to customize the behavior and appearance of the `TextInput` component in your React Native applications.
*/}

const User = () : JSX.Element => {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    return (
        <View>
            <Text style={{fontSize : 30,color : '#000',margin : 5}}>Input Field</Text>
            <Text style={{fontSize : 20,color : '#000',margin : 5}}>Enter Your name : </Text>
            <TextInput 
                style={{fontSize : 20,color : '#000',margin : 5,borderColor : 'black',borderWidth : 1,borderRadius : 5}}
                onChangeText={(value)=>{
                    setFname(value);
                }}
                value={fname}
                id='firstName'
            ></TextInput>
            <TextInput 
                style={{fontSize : 20,color : '#000',margin : 5,borderColor : 'black',borderWidth : 1,borderRadius : 5}}
                onChangeText={(value)=>{
                    setLname(value);
                }}
                id='lastName'
                value={lname}
            ></TextInput>
            <Button title='Clear' onPress={()=>{
                setFname("");
                setLname("");
            }}></Button>
            <Text style={{fontSize : 20,color : '#000',margin : 5}}>{fname}</Text>
            <Text style={{fontSize : 20,color : '#000',margin : 5}}>{lname}</Text>
        </View>
    )
}


export default User;
