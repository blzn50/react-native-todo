import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Todo List</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#87ceeb',
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default Title;
