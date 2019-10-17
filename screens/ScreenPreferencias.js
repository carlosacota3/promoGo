import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { Header, CheckBox, ListItem } from 'react-native-elements';
import { bool } from 'prop-types';
import { stringify } from 'qs';

class ScreenPreferencias extends Component {

  state = { ch_algo: false };
  constructor(){
    super();
    // Creating Global Variable.
    global.valor;
  }

  almacenarPrimeraVez() {
    //Comida
    AsyncStorage.setItem('pizza', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('hamburgesa', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('nachos', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('boneless', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('hotdogs', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('sushi', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('cafe', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('alcohol', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('snacks', 'false', (err) => { console.log(err); });
    //Ropa
    AsyncStorage.setItem('camisa', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('pantalones', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('vestidos', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('calzado', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('accesorios', 'false', (err) => { console.log(err); });
    //Higiene
    AsyncStorage.setItem('shampoo', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('jabon', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('perfume', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('gel', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('antitranspirante', 'false', (err) => { console.log(err); });
    
    //Electronica
    AsyncStorage.setItem('Celulares', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('Tablets', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('tv', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('computadoras', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('impresoras', 'false', (err) => { console.log(err); });
    
    //Electrodomesticos
    AsyncStorage.setItem('estufas', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('lavadoras', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('secadoras', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('licuadoras', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('microondas', 'false', (err) => { console.log(err); });
    
    //Autos
    AsyncStorage.setItem('llantas', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('aceite', 'false', (err) => { console.log(err); });
    AsyncStorage.setItem('acc_limpieza', 'false', (err) => { console.log(err); });

  }

  //Carga los datos almacenados en el celular, a los checkboxs
  cargarDatos() {
    AsyncStorage.getItem('pizza', (err, result) => {if (result === 'true'){ this.setState({ch_pizza: true})} else { this.setState({ch_pizza: false})}});
    AsyncStorage.getItem('hamburgesa', (err, result) => {{result === 'true' ? this.setState({ch_hamburgesa: true}) : this.setState({ch_hamburgesa: false})}});
    AsyncStorage.getItem('nachos', (err, result) => {{result === 'true' ? this.setState({ch_nachos: true}) : this.setState({ch_nachos: false})}});
    AsyncStorage.getItem('boneless', (err, result) => {{result === 'true' ? this.setState({ch_boneless: true}) : this.setState({ch_boneless: false})}});
    AsyncStorage.getItem('hotdogs', (err, result) => {{result === 'true' ? this.setState({ch_hotdogs: true}) : this.setState({ch_hotdogs: false})}});
    AsyncStorage.getItem('sushi', (err, result) => {{result === 'true' ? this.setState({ch_sushi: true}) : this.setState({ch_sushi: false})}});
    AsyncStorage.getItem('cafe', (err, result) => {{result === 'true' ? this.setState({ch_cafe: true}) : this.setState({ch_cafe: false})}});
    AsyncStorage.getItem('alcohol', (err, result) => {{result === 'true' ? this.setState({ch_alcohol: true}) : this.setState({ch_alcohol: false})}});
    AsyncStorage.getItem('snacks', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    
    AsyncStorage.getItem('camisa', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('pantalones', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('vestidos', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('calzado', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('accesorios', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    
    AsyncStorage.getItem('shampoo', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('jabon', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('perfume', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('gel', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('antitranspirante', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    
    AsyncStorage.getItem('celulares', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('tablets', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('tv', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('computadoras', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('impresoras', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    
    AsyncStorage.getItem('estufas', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('lavadoras', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('secadoras', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('licuadoras', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('microondas', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    
    AsyncStorage.getItem('llantas', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('aceite', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});
    AsyncStorage.getItem('acc_limpieza', (err, result) => {{result === 'true' ? this.setState({ch_snacks: true}) : this.setState({ch_snacks: false})}});

  }

  //Se ejecuta cada vez que se cambie un checkbox para actualizar su info de estado en el local storage
  cambioChecked(titulo, estado) {
    console.log(estado.toString());
    AsyncStorage.setItem(titulo, estado.toString(), (err) => { if (err !== null) { alert(err) } });
  }

  //Antes de cargar el componente/screen
  componentWillMount() {
    var r = null;
    //Verificamos que el Item pizza exista o no almacenado, si no existe pizza no existe ningun otro
    AsyncStorage.getItem('pizza', (err, result) => {
      console.log(err);
      if (result === null) {
        //pizza no existe entonces procedemos a almacenar la informacion por primera vez
        this.almacenarPrimeraVez();
        console.log('entro');
      }
      else { //En caso de ya existir datos, los cargamos a los checkbox
        this.cargarDatos();
      }
    });
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor={'#ff7626'}
          leftComponent={{ text: '<', color: '#fff', style: { color: '#fff', fontSize: 50 }, onPress: () => this.props.navigation.openDrawer() }}
          centerComponent={{ text: 'Preferencias', style: { color: '#fff', fontSize: 24, fontWeight: 'bold' } }}
          // rightComponent={{ icon: 'check', color: '#fff', size: 37 }}
        />
        <ScrollView>
          <View style={styles.scroll}>
            <View style={styles.container}>
              <Text style={styles.titulos}>Comida</Text>
              <CheckBox title='Pizza' checked={this.state.ch_pizza} onPress={() => { this.setState({ ch_pizza: !this.state.ch_pizza }); this.cambioChecked('pizza', !this.state.ch_pizza)}} />
              <CheckBox title='Hamburguesa' checked={this.state.ch_hamburguesa} onPress={() => { this.setState({ ch_hamburguesa: !this.state.ch_hamburguesa }); this.cambioChecked('hamburguesa', !this.state.ch_hamburguesa)}} />
              <CheckBox title='Nachos' checked={this.state.ch_nachos} onPress={() => {this.setState({ ch_nachos: !this.state.ch_nachos }); this.cambioChecked('nachos', !this.state.ch_nachos)}} />
              <CheckBox title='Boneless' checked={this.state.ch_boneless} onPress={() => {this.setState({ ch_boneless: !this.state.ch_boneless }); this.cambioChecked('boneless', !this.state.ch_boneless)}} />
              <CheckBox title='Hotdogs' checked={this.state.ch_hotdogs} onPress={() => {this.setState({ ch_hotdogs: !this.state.ch_hotdogs }); this.cambioChecked('hotdogs', !this.state.ch_hotdogs)}} />
              <CheckBox title='Sushi' checked={this.state.ch_sushi} onPress={() => {this.setState({ ch_sushi: !this.state.ch_sushi }); this.cambioChecked('sushi', !this.state.ch_sushi)}} />
              <CheckBox title='Cafe' checked={this.state.ch_cafe} onPress={() => {this.setState({ ch_cafe: !this.state.ch_cafe }); this.cambioChecked('cafe', !this.state.ch_cafe)}} />
              <CheckBox title='Bebidas con Alcohol' checked={this.state.ch_alcohol} onPress={() => {this.setState({ ch_alcohol: !this.state.ch_alcohol }); this.cambioChecked('alcohol', !this.state.ch_alcohol)}} />
              <CheckBox title='Snacks' checked={this.state.ch_snacks} onPress={() => {this.setState({ ch_snacks: !this.state.ch_snacks }); this.cambioChecked('snacks', !this.state.ch_snacks)}} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titulos}>Ropa</Text>
              <CheckBox title='Camisas' checked={this.state.ch_camisa} onPress={() => {this.setState({ ch_camisa: !this.state.ch_camisa }); this.cambioChecked('camisa', !this.state.ch_camisa)}} />
              <CheckBox title='Pantalones' checked={this.state.ch_pantalones} onPress={() => {this.setState({ ch_pantalones: !this.state.ch_pantalones }); this.cambioChecked('pantalones', !this.state.ch_pantalones)}} />
              <CheckBox title='Vestidos' checked={this.state.ch_vestidos} onPress={() => {this.setState({ ch_vestidos: !this.state.ch_vestidos }); this.cambioChecked('vestidos', !this.state.ch_vestidos)}} />
              <CheckBox title='Calzado' checked={this.state.ch_calzado} onPress={() => {this.setState({ ch_calzado: !this.state.ch_calzado }); this.cambioChecked('calzado', !this.state.ch_calzado)}} />
              <CheckBox title='Accesorios' checked={this.state.ch_accesorios} onPress={() => {this.setState({ ch_accesorios: !this.state.ch_accesorios }); this.cambioChecked('accesorios', !this.state.ch_accesorios)}} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titulos}>Higiene</Text>
              <CheckBox title='Shampoo' checked={this.state.ch_shampoo} onPress={() => {this.setState({ ch_shampoo: !this.state.ch_shampoo }); this.cambioChecked('shampoo', !this.state.ch_shampoo)}} />
              <CheckBox title='Jabon' checked={this.state.ch_jabon} onPress={() => {this.setState({ ch_jabon: !this.state.ch_jabon }); this.cambioChecked('jabon', !this.state.ch_jabon)}} />
              <CheckBox title='Perfume' checked={this.state.ch_perfume} onPress={() => {this.setState({ ch_perfume: !this.state.ch_perfume }); this.cambioChecked('perfume', !this.state.ch_perfume)}} />
              <CheckBox title='Gel' checked={this.state.ch_gel} onPress={() => {this.setState({ ch_gel: !this.state.ch_gel }); this.cambioChecked('gel', !this.state.ch_gel)}} />
              <CheckBox title='Antitranspirante' checked={this.state.ch_antitranspirante} onPress={() => {this.setState({ ch_antitranspirante: !this.state.ch_antitranspirante }); this.cambioChecked('antitranspirante', !this.state.ch_antitranspirante)}} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titulos}>Electronica</Text>
              <CheckBox title='Celulares' checked={this.state.ch_celulares} onPress={() => {this.setState({ ch_celulares: !this.state.ch_celulares }); this.cambioChecked('celulares', !this.state.ch_celulares)}} />
              <CheckBox title='Tablets' checked={this.state.ch_tablets} onPress={() => {this.setState({ ch_tablets: !this.state.ch_tablets }); this.cambioChecked('tablets', !this.state.ch_tablets)}} />
              <CheckBox title='TV' checked={this.state.ch_TV} onPress={() => {this.setState({ ch_TV: !this.state.ch_TV }); this.cambioChecked('tv', !this.state.ch_TV)}} />
              <CheckBox title='Computadoras' checked={this.state.ch_computadoras} onPress={() => {this.setState({ ch_computadoras: !this.state.ch_computadoras }); this.cambioChecked('computadoras', !this.state.ch_computadoras)}} />
              <CheckBox title='Impresoras' checked={this.state.ch_impresoras} onPress={() => {this.setState({ ch_impresoras: !this.state.ch_impresoras }); this.cambioChecked('impresoras', !this.state.ch_impresoras)}} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titulos}>Electrodomesticos</Text>
              <CheckBox title='Estufas' checked={this.state.ch_estufas} onPress={() => {this.setState({ ch_estufas: !this.state.ch_estufas }); this.cambioChecked('estufas', !this.state.ch_estufas)}} />
              <CheckBox title='Lavadoras' checked={this.state.ch_lavadoras} onPress={() => {this.setState({ ch_lavadoras: !this.state.ch_lavadoras }); this.cambioChecked('lavadoras', !this.state.ch_lavadoras)}} />
              <CheckBox title='Secadoras' checked={this.state.ch_secadoras} onPress={() => {this.setState({ ch_secadoras: !this.state.ch_secadoras }); this.cambioChecked('secadoras', !this.state.ch_secadoras)}} />
              <CheckBox title='Licuadoras' checked={this.state.ch_licuadoras} onPress={() => {this.setState({ ch_licuadoras: !this.state.ch_licuadoras }); this.cambioChecked('licuadoras', !this.state.ch_licuadoras)}} />
              <CheckBox title='Microondas' checked={this.state.ch_microondas} onPress={() => {this.setState({ ch_microondas: !this.state.ch_microondas }); this.cambioChecked('microondas', !this.state.ch_microondas)}} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titulos}>Autos</Text>
              <CheckBox title='Llantas' checked={this.state.ch_llantas} onPress={() => {this.setState({ ch_llantas: !this.state.ch_llantas }); this.cambioChecked('llantas', !this.state.ch_llantas)}} />
              <CheckBox title='Aceite' checked={this.state.ch_aceite} onPress={() => {this.setState({ ch_aceite: !this.state.ch_aceite }); this.cambioChecked('aceite', !this.state.ch_aceite)}} />
              <CheckBox title='Accesorios de Limpieza' checked={this.state.ch_acc_limpieza} onPress={() => {this.setState({ ch_acc_limpieza: !this.state.ch_acc_limpieza }); this.cambioChecked('acc_limpieza', !this.state.ch_acc_limpieza)}} />
            </View>
          </View>
        </ScrollView>
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
  },
  scroll: {
    height: 2100,
  }
})