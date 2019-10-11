import React from 'react';
import { Text } from 'react-native';
// import { GoogleSignIn } from 'expo-google-sign-in';
import * as GoogleSignIn from 'expo-google-sign-in';

export default class AuthScreen extends React.Component {
  state = { user: null };

  // componentDidMount() {
  //   this.initAsync();
  // }
  //Inicio de sesion con IOS (creo xd)
  // initAsync = async () => {
  //   await GoogleSignIn.initAsync({
  //     clientId: '712490136755-jg2bh3e74sd8030kapnsnuiv9u3aa47l.apps.googleusercontent.com',
  //   });
  //   this._syncUserWithStateAsync();
  // };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.setState({ user: null });
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
      console.log(message);
    }
  };

  onPress = () => {
    if (this.state.user) {
      this.signOutAsync();
    } else {
      this.signInAsync();
    }
  };

  render() {
    return <Text style={{margin: 30}} onPress={this.onPress}>Toggle Auth</Text>;
  }
}