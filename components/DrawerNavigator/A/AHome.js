import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class AHome extends PureComponent {
  componentDidMount() {
    console.log('AHOME DID MOUNT');
  }

  componentWillUnmount() {
    console.log('AHOME WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>AHome</Text>
        <Button title="A1" onPress={this.handleA1Press} />
        <Button title="A2" onPress={this.handleA2Press} />
        <Button title="A3" onPress={this.handleA3Press} />
      </View>
    );
  }

  handleA1Press = () => {
    const { navigation: { navigate }} = this.props;
    navigate('A1');
  };

  handleA2Press = () => {
    const { navigation: { navigate }} = this.props;
    navigate('A2');
  };

  handleA3Press = () => {
    const { navigation: { navigate }} = this.props;
    navigate('A3');
  };
}

export default AHome;
