import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl  : ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl} : DiceProps) : JSX.Element =>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): JSX.Element {

  const [image, setImage] = useState<ImageSourcePropType>(DiceOne);
  const [image1, setImage1] = useState<ImageSourcePropType>(DiceOne);

  const rollTheDice = () =>{
    let randomNumber = Math.floor(Math.random() * 6 ) + 1;
    let randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
    switch (randomNumber) {
      case 1:
      setImage(DiceOne);
      break;
      case 2:
        setImage(DiceTwo);
      break;
      case 3:
        setImage(DiceThree);
      break;
      case 4:
        setImage(DiceFour);
      break;
      case 5:
        setImage(DiceFive);
      break;
      case 6:
        setImage(DiceSix);
      break;
      default:
        setImage(DiceOne);
      break;
    }
    switch (randomNumber1) {
      case 1:
        setImage1(DiceFour);
      break;
      case 2:
        setImage1(DiceOne);
      break;
      case 3:
        setImage1(DiceFive);
      break;
      case 4:
        setImage1(DiceThree);
      break;
      case 5:
        setImage1(DiceTwo);
      break;
      case 6:
        setImage1(DiceFour);
      break; 
      default:
        setImage1(DiceOne);
      break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={image}></Dice>
      <Dice imageUrl={image1}></Dice>
      <Pressable
        onPress={rollTheDice}
        style={{backgroundColor:'blue',borderRadius:10}}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
          Roll The Dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
