import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';
import * as GoogleSignIn from 'expo-google-sign-in';

class ScreenConfiguracion extends Component {

  state = { user: null };

  render(){
    return (
      <View>
          <Header
            backgroundColor={'#ff7626'}
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer()}}
            centerComponent={{ text: 'Edita la cuenta', style: { color: '#fff', fontSize: 24, fontWeight: 'bold'}}}
            // rightComponent={{ icon: 'home', color: '#fff' }}
        />
          <Text style={{margin: 30}}>Toggle Auth</Text>
      </View>
    );
  }
}

export default ScreenConfiguracion;

const styles = StyleSheet.create({
    container: {  
        //marginTop: 10,
        alignItems: "center", 
        justifyContent: "center", 
        //padding:6,
        //backgroundColor: '#2f4f4f',
        height: '100%',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
})