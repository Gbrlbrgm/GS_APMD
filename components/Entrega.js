import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entrega } from '../models/Entrega';
import { useContext } from 'react';
import { EntregasController } from '../controllers/EntregasController';

export default function Card({ entrega }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.dados}>Código de rastreio: {entrega.codigoRastreio}</Text>
      <Text style={styles.dados}>Titulo: {entrega.nome}</Text>
      <Text style={styles.dados}>Prazo de Entrega: {entrega.prazoEntrega}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 123,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginLeft: 5,
    marginVertical: 10,
  },
  dados: {
    marginVertical: 3,
    marginLeft: 10,
    fontSize: 15,
  },
});
