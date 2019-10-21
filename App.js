import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MapScreen from './screens/ScreenMapa'
import LoginScreen from './screens/LoginScreen'
import CuentaScreen from './screens/ScreenCuenta'
import PreferenciasScreen from './screens/ScreenPreferencias'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export default class App extends Component {

  navegar() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
    <Drawer />
    );
  }
}

// const Stack = createStackNavigator({
//     Map: MapScreen,
// })

// const Mapa = createStackNavigator({
//   Map: MapScreen,
// })

const Drawer = createDrawerNavigator ({
  Cuenta: {screen: CuentaScreen},
  Preferencias: {screen: PreferenciasScreen},
  LogIn: {screen: LoginScreen},
  Inicio: {screen: MapScreen},
  // Configuracion: {xcreen: ConfiguracionScreen},
  // Stack: {screen: Stack},
  // Mapa: {screen: Mapa},
})