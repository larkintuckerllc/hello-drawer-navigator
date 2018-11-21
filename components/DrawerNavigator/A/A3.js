import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class A3 extends PureComponent {
  componentDidMount() {
    console.log('A3 DID MOUNT');
  }

  componentWillUnmount() {
    console.log('A3 WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>A3</Text>
      </View>
    );
  }
}

export default A3;
