import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, AsyncStorage, List, ListItem, ScrollView } from 'react-native';
import axios from 'axios';

class Contents extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const token = AsyncStorage.getItem('token');
    token
      .then(parsedToken => {
        axios.get('https://mobile-server-ii.herokuapp.com/users', {
          headers: {
            authorization: parsedToken,
          },
        });
      })
      .then(res => {
        const users = res.data;
        this.setState({
          users,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: { error: 'Error fetching users' },
        });
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <FlatList
            keyExtractor={item => item._id}
            data={this.state.users}
            renderItem={({ item }) => {
              return <Text>{item.email}</Text>;
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Contents;
