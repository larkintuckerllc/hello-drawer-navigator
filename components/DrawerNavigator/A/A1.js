import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class A1 extends PureComponent {
  componentDidMount() {
    console.log('A1 DID MOUNT');
  }

  componentWillUnmount() {
    console.log('A1 WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>A1</Text>
      </View>
    );
  }
}

export default A1;
