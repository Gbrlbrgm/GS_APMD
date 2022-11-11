import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Titulo from '../../components/Titulo';

export default function Default(params) {
  const navigation = useNavigation();
  const opcaoEscolhida = params;

  return (
    <View style={styles.container}>
      <Titulo data={opcaoEscolhida}></Titulo>
      <Text style={styles.defaultText}>Serviço não encontrado.</Text>
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
  defaultText: {
    color: '#FFF',
    fontSize: 17,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FF0000',
    width: 100,
    height: 25,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  back: {
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 3,
  },
});
