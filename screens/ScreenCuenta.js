import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';

class ScreenCuenta extends Component {
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
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}} 
            title={'Mi nombre'}
            containerStyle={styles.avatar}
          />
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
    }
})