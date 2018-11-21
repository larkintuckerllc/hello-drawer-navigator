import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class A extends PureComponent {
  componentDidMount() {
    console.log('A DID MOUNT');
  }

  componentWillUnmount() {
    console.log('A WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>A</Text>
      </View>
    );
  }
}

export default A;
