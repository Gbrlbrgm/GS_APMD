import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Titulo from '../../components/Titulo';
import { PackagesContext } from '../../controllers/EntregasController';

export default function Excluir(params) {
  const navigation = useNavigation();
  const opcaoEscolhida = params;
  const { excluirEntrega } = useContext(PackagesContext);

  return (
    <View style={styles.container}>
      <Titulo data={opcaoEscolhida}></Titulo>
      <TextInput
        style={styles.input}
        placeholder='Informe a entrega a ser excluída. Código: '
        onSubmitEditing={(event) => excluirEntrega(event.nativeEvent.text)}
      ></TextInput>
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
  input: {
    height: 40,
    width: 220,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  back: {
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 3,
  },
});
