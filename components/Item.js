import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Item(params) {
  const navigation = useNavigation();
  const data = params.data;
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ServiceDetails', data)}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.title}</Text>
        <Text style={styles.descricao}>{data.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
  },
  card: {
    backgroundColor: 'white',
    height: 126,
    alignItems: 'center',
    padding: 10,
  },
  titulo: {
    color: '#00297F',
    fontSize: 17,
  },
  descricao: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
  },
});