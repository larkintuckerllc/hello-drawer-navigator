import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class B extends PureComponent {
  componentDidMount() {
    console.log('B DID MOUNT');
  }

  componentWillUnmount() {
    console.log('B WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text>B</Text>
      </View>
    );
  }
}

export default B;
