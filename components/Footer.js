import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Footer = ({ onRemoveCompleted }) => (
  <View>
    <TouchableOpacity
      style={styles.footer}
      // onPress={() => onRemoveCompleted}
    >
      <Text style={styles.text}>Remove completed items</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    fontSize: 15,
    color: 'red',
  },
});

export default Footer;
