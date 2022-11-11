import { StyleSheet, Text, View } from 'react-native';
import Servico from './Servico';
import ListaServicos from '../data/ListaServicos';

export default function Services() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Opções Disponíveis</Text>
      </View>
      <View style={styles.gridServicos}>
        <Servico data={ListaServicos[0]}></Servico>
        <Servico data={ListaServicos[1]}></Servico>
        <Servico data={ListaServicos[2]}></Servico>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    color: '#F1F1F1',
    fontWeight: '900',
    paddingBottom: 10,
  },
  gridServicos: {
    marginVertical: 10,
  },
});
