import React, { Component } from 'react';
import { CheckBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  actions: {
    flexDirection: 'row',
  },
  checkbox:{
    
  },
  completed: {
    backgroundColor: 'lightgray',
  },
  remove: {
    color: 'red',
    fontSize: 20,
  },
});

class List extends Component {
  renderTodo = (todo, i) => {
    const { onToggleCompleted, onRemoveItem } = this.props;
    const todoStyle = todo.completed ? [styles.checkbox, styles.completed] : styles.checkbox;
    return (
      <View key={i} style={styles.todo}>
        <Text>{todo.label}</Text>
        <View style={styles.actions}>
          <CheckBox
            style={todoStyle}
            value={todo.completed}
            onValueChange={() => onToggleCompleted(i)}
          />
          <TouchableOpacity  onPress={() => onRemoveItem(i)}>
            <Text style={styles.remove}>&times;</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const { todos } = this.props;
    console.log('todos: ', todos);
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>Dummy Text</Text>
        {todos.map(this.renderTodo)}
      </ScrollView>
    );
  }
}

export default List;
