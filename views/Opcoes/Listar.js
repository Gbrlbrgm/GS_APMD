import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Entrega from '../../components/Entrega';
import Titulo from '../../components/Titulo';
import { EntregasContext } from '../../controllers/EntregasController';

export default function Listar(params) {
  const navigation = useNavigation();
  const opcaoEscolhida = params;
  const { entregas } = useContext(EntregasContext);

  function ListaEntregas() {
    if (!entregas.length) {
      return (
        <View>
          <Text style={styles.defaultText}>Sem entregas disponiveis.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.packagesList}>
          <FlatList data={entregas} renderItem={({ item }) => <Entrega entrega={item}></Entrega>}></FlatList>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Titulo data={opcaoEscolhida}></Titulo>
      <ListaEntregas></ListaEntregas>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5F7ED3',
  },
  botao: {
    backgroundColor: '#FF0000',
    width: 100,
    height: 25,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    marginTop: 10,
  },
  voltar: {
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 3,
  },
  packagesList: {
    width: '90%',
    height: '30%',
  },
  defaultText: {
    color: '#FFF',
    fontSize: 17,
    marginVertical: 10,
  },
});
