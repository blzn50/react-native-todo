import React, { Component } from 'react';
import { CheckBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingVertical: 10,
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
  emptyTodo: {
    textAlign: 'center',
    color: 'lightgray',
    fontSize: 20,
  },
});

class List extends Component {
  renderTodo = (todo, i) => {
    const { onToggleCompleted, onRemoveItem } = this.props;
    const todoStyle = todo.completed ? [styles.todo, styles.completed] : styles.todo;
    return (
      <View key={i} style={todoStyle}>
        <Text style={styles.label}>
          {todo.label.length > 36 ? todo.label.slice(0, 35).concat('..') : todo.label}
        </Text>
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
    return (
      <ScrollView style={styles.contentContainer}>
        {todos.length < 1 ? (
          <Text style={styles.emptyTodo}>Wow! Such empty todo list.</Text>
        ) : (
          todos.map(this.renderTodo)
        )}
      </ScrollView>
    );
  }
}

export default List;
