import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { addItem, removeCompleted, removeItem, toggleCompleted } from '../actions/todoAction';
import Footer from '../components/Footer';
import Input from '../components/Input';
import List from '../components/List';
import Title from '../components/Title';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    flex: 1,
    marginTop: 24,
  },
});

class Index extends Component {
  state = {
    todos: [],
  };

  onAddItem = item => {
    this.props.addItem(item);
  };

  onRemoveItem = index => {
    this.props.removeItem(index);
  };

  onToggleCompleted = index => {
    this.props.toggleCompleted(index);
  };

  onRemoveCompleted = item => {
    this.props.removeCompleted(item);
  };

  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Input onSubmit={this.onAddItem} />
        <List todos={this.props.todos} onToggleCompleted={this.onToggleCompleted} onRemoveItem={this.onRemoveItem} />
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

const actionCreators = {
  addItem,
  removeItem,
  toggleCompleted,
  removeCompleted,
};

export default connect(
  mapStateToProps,
  actionCreators
)(Index);
