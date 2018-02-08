import React, { Component } from 'react';
import { View, Text, Button, TextField, FlatList } from 'react-native';

class Todos extends Component {
  constructor() {
    super();
  }

  //   this.state = {
  //     text: '',
  //     todos: [],
  //   };
  // }

  // handleToggle = index => {
  //   const todos = Array.from(this.state.todos);
  //   todos[index].completed = !this.state.completed;
  //   this.setState({ todos });
  // };

  // handleAddTodo = () => {
  //   this.setState(prevState => {
  //     let { text, todos } = prevState;
  //     return {
  //       text: '',
  //       todos: [...todos, { key: text + todos.length, text, completed: false }],
  //     };
  //   });
  // };

  // handleTextChange = text => {
  //   this.setState({ text });
  // };

  render() {
    return <View>Test</View>;
  }
}

export default Todos;
