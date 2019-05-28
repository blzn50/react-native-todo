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
  label: { fontSize: 20 },
  actions: {
    flexDirection: 'row',
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
    const todoStyle = todo.completed ? [styles.todo, styles.completed] : styles.todo;
    return (
      <View key={i} style={todoStyle}>
        <Text style={styles.label}>{todo.label.slice(0, 35).concat('..')}</Text>
        <View style={styles.actions}>
          <CheckBox value={todo.completed} onValueChange={() => onToggleCompleted(i)} />
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
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
      <ScrollView style={styles.contentContainer}>
        <Text>Dummy Text</Text>
        {todos.map(this.renderTodo)}
      </ScrollView>
    );
  }
}

export default List;
