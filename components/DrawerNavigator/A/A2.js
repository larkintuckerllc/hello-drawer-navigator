import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class A2 extends PureComponent {
  componentDidMount() {
    console.log('A2 DID MOUNT');
  }

  componentWillUnmount() {
    console.log('A2 WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>A2</Text>
      </View>
    );
  }
}

export default A2;
