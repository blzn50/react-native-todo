import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class Input extends Component {
  state = {
    text: '',
  };

  onChangeText = text => {
    this.setState({ text });
  };

  onSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;
    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
    // text.focus(); // to focus the text input. might replaced by blurOnSubmit
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={'Add todo item'}
        value={this.state.text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        blurOnSubmit={false} // to focus the text input
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    fontSize: 19,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
});
