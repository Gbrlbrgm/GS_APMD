import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Servico(params) {
  const navigation = useNavigation();
  const data = params.data;
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('OpcaoEscolhida', data)}>
      <View style={styles.card}>
        <Text style={styles.nome}>{data.nome}</Text>
        <Text style={styles.descricao}>{data.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    marginVertical: 10,
    height: 75,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  nome: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
  },
  descricao: {
    color: 'grey',
    fontSize: 13,
    textAlign: 'center',
  },
});
