import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Entrega from '../../components/Entrega';
import Titulo from '../../components/Titulo';

export default function Adicionar(params) {
  const navigation = useNavigation();
  const opcaoEsoclhida = params;

  return (
    <View style={styles.container}>
      <Titulo data={opcaoEsoclhida}></Titulo>
      <Entrega></Entrega>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Voltar</Text>
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
  button: {
    backgroundColor: '#FF0000',
    width: 100,
    height: 25,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  back: {
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 3,
  },
});
