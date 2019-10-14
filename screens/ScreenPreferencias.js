import React, { Component } from 'react';
import { Text,  View, StyleSheet, ScrollView, SectionList } from 'react-native';
import { Header, CheckBox, ListItem  } from 'react-native-elements';

class ScreenPreferencias extends Component {

  state = {  };

  render(){
    return (
      <View>
          <Header
            backgroundColor={'#ff7626'}
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer()}}
            centerComponent={{ text: 'Preferencias', style: { color: '#fff', fontSize: 24, fontWeight: 'bold'}}}
            // rightComponent={{ icon: 'home', color: '#fff' }}
        />
             <ListItem>
                <View style={styles.container}>
                    <Text style={styles.titulos}>Comida</Text>
                    {/*  */}
                    <CheckBox title='Pizza' checked={this.state.ch_pizza} onPress={() => this.setState({ch_pizza: !this.state.ch_pizza})}/>
                    {/*  */}
                    <CheckBox title='Hamburguesa' checked={this.state.ch_hamburguesa} onPress={() => this.setState({ch_hamburguesa: !this.state.ch_hamburguesa})}/>
                    {/*  */}
                    <CheckBox title='Nachos' checked={this.state.ch_nachos} onPress={() => this.setState({ch_nachos: !this.state.ch_nachos})}/>
                    {/*  */}
                    <CheckBox title='Boneless' checked={this.state.ch_boneless} onPress={() => this.setState({ch_boneless: !this.state.ch_boneless})}/>
                    {/*  */}
                    <CheckBox title='Hotdogs' checked={this.state.ch_hotdogs} onPress={() => this.setState({ch_hotdogs: !this.state.ch_hotdogs})}/>
                    {/*  */}
                    <CheckBox title='Sushi' checked={this.state.ch_sushi} onPress={() => this.setState({ch_sushi: !this.state.ch_sushi})}/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.titulos}>Ropa</Text>
                    <CheckBox title='Camisas' checked={this.state.ch_pizza} onPress={() => this.setState({ch_pizza: !this.state.ch_pizza})}/>
                    {/*  */}
                    <CheckBox title='Pantalones' checked={this.state.ch_pizza} onPress={() => this.setState({ch_pizza: !this.state.ch_pizza})}/>
                    {/*  */}
                    <CheckBox title='Vestidos' checked={this.state.ch_pizza} onPress={() => this.setState({ch_pizza: !this.state.ch_pizza})}/>
                    {/*  */}
                    <CheckBox title='Calzado' checked={this.state.ch_pizza} onPress={() => this.setState({ch_pizza: !this.state.ch_pizza})}/>
                    {/*  */}
                    <CheckBox title='Accesorios' checked={this.state.ch_pizza} onPress={() => this.setState({ch_pizza: !this.state.ch_pizza})}/>
                    {/*  */}
                </View>
                <View style={styles.container}>
                    <Text style={styles.titulos}>Otros</Text>
                </View>
                </ListItem>
      </View>
    );
  }
}

export default ScreenPreferencias;

const styles = StyleSheet.create({
    container: {  
        margin: 3,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    titulos: {
        marginLeft: '2%',
        marginBottom: '2%' 
    }
})