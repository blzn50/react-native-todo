import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  todo: {
    flexDirection: 'row',
  },
  completed: {
    backgroundColor: 'lightgray',
  },
  remove: {
    color: 'red',
  },
});

class List extends Component {
  renderTodo = (todo, i) => {
    const { onToggleCompleted, onRemoveItem } = this.props;
    // const todoStyle = todo.completed ? [styles.todo, styles.completed] : styles.todo;
    return (
      <View key={i} style={styles.list}>
        <Text>dummy todo</Text>
        <View>
          {/* <CheckBox
            style={todoStyle}
            value={data.completed}
            onValueChange={() => onToggleCompleted(i)}
          /> */}
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
            <Text style={styles.remove}>&times;</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>Dummy Text</Text>
      </ScrollView>
    );
  }
}

export default List;
