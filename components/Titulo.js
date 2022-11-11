import { Text, View, StyleSheet } from 'react-native';

export default function Titulo({ data: opcaoEscolhida }) {
  return (
    <View>
      <Text style={styles.titulo}>
        {opcaoEscolhida.id}. {opcaoEscolhida.titulo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textTransform: 'capitalize',
    fontSize: 22,
    color: '#F9F871',
    fontWeight: '700',
    marginBottom: 10,
  },
});