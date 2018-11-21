import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class C extends PureComponent {
  componentDidMount() {
    console.log('C DID MOUNT');
  }

  componentWillUnmount() {
    console.log('C WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>C</Text>
      </View>
    );
  }
}

export default C;
