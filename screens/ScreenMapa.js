import React, { Component, Fragment } from 'react';
// import { Image } from 'expo';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Header} from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation'; 
// import { Location, Permissions } from 'expo';
import { Icon } from 'react-native-elements';

import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
// import Icon from 'react-native-fontawesome';

export default class App extends React.Component {

    state = {
      location: {
        coords: {
          latitude: 0,
          longitude: 0,
        }
      },
      errorMessage: null,
    };
    

    //Antes de que se monte el DOM se ejecuta lo que tenga dentro este
    componentWillMount() {
      this.actualizarUbicacion();
    }

  //Solicitar el permiso de usar la ubicacion y en caso de ser permitido guarda la ubicacion en la variable location en state
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'El permiso de acceso a la ubicacion fue denegado',
      });
  }

  
  let location = await Location.getCurrentPositionAsync({});
  console.log(JSON.stringify(location));
    this.setState({ 
      location: {
        coords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }
      } 
    });
  };

  actualizarUbicacion = async () => {
    this.state.timer = setInterval(() => this._getLocationAsync(), 5000)
  }
  
  off_actualizarUbicacion = () => {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <View style={backgroundColor = '#000'}>
        {/* <Header
          backgroundColor={'#ff7626'}
          leftComponent={{ icon: 'menu', color: '#000', onPress: () => this.props.navigation.openDrawer()}}
          // centerComponent={{ text: 'PromoGo!', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'}}}
          // rightComponent={{ icon: 'home', color: '#fff' }}
        /> */}
        <MapView
          style={styles.mapContainer}
          region={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
          }}
        >
          {<MapView.Marker
              coordinate={this.state.location.coords}
              title="Aqui te encuentras Tu"
              pinColor="orange"
            ></MapView.Marker>}
        </MapView>
        <TouchableHighlight style={styles.logo} onPress={() => this.props.navigation.openDrawer()}>
          <Image style={styles.hamburger} source={require('../assets/menu-filled.png')}/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mapContainer: {
      width: '100%',
      height: '100%',
      //marginTop: 8,
      //marginBottom: 10,
    },
    logo: {
      position: 'absolute',
      marginTop: 30,
      marginLeft: 10,
      height: 35,
      width: 35
    },
    hamburger: {
      position: 'absolute',
      height: 35,
      width: 35,
    }
});