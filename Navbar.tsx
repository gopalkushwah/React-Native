import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>My App</Text>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.btnColor}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.btnColor}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.btnColor}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000088',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  navButton: {
    padding: 10
  },
  btnColor :{
    color :'white'
  }
});

export default Navbar;
