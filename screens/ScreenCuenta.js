import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';
import * as GoogleSignIn from 'expo-google-sign-in';
import { gray } from 'ansi-colors';

class ScreenCuenta extends Component {

  state = { user:{
      uid: '',
      email: '',
      displayName: '',
      photoURL: 'https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png',
      firstName: '',
      lastName: '',
  } };

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
    alert(this.state.user.uid);
    alert(this.state.user.email);
    alert(this.state.user.displayName);
    alert(this.state.user.photoURL);
    alert(this.state.user.firstName);
    alert(this.state.user.lastName);
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
    if (this.state.user.uid === '') {
      this.signInAsync();
    } else {
      this.signOutAsync();
    }
  };

  render(){
    return (
      <View>
          <Header
            backgroundColor={'#ff7626'}
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer()}}
            centerComponent={{ text: 'Edita la cuenta', style: { color: '#fff', fontSize: 24, fontWeight: 'bold'}}}
            // rightComponent={{ icon: 'home', color: '#fff' }}
        />
          <Avatar 
            rounded
            size={130}
            source={{ uri: this.state.user.photoURL,}} 
            title={'Mi nombre'}
            containerStyle={styles.avatar}
          />
          <Text style={{margin: 30}} onPress={this.onPress}>{this.state.user.uid === '' ? 'Iniciar Sesión' : 'Cerrar Sesión'}</Text>
          <View style={styles.margen_info}>
            <Text style={styles.title}>Nombre</Text>
            <Text style={styles.info}>{this.state.firstName === '' ? '' : this.state.firstName}</Text>
            <Text style={styles.title}>Apellido</Text>
            <Text style={styles.info}>{this.state.lastName === '' ? '' : this.state.lastName}</Text>
            <Text style={styles.title}>Correo Electronico</Text>
            <Text style={styles.info}>{this.state.email === '' ? '' : this.state.email}</Text>
          </View>
      </View>
    );
  }
}

export default ScreenCuenta;

const styles = StyleSheet.create({
    container: {  
        //marginTop: 10,
        alignItems: "center", 
        justifyContent: "center", 
        //padding:6,
        //backgroundColor: '#2f4f4f',
        height: '100%'
    },
    avatar: {
        marginLeft: '4%', 
        marginTop: '6%'
    },
    margen_info: {
      margin: 6,
      padding: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#d6d7da',
    },
    title: {
      color: '#9c9c9c',
      fontSize: 16,
      marginTop: 8,
    },
    info: {
      marginBottom: 8,
    }
})