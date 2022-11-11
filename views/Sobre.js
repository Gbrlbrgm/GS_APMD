import Header from '../components/Header';
import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Text style={styles.sobre}>App desenvolvido em MVC para a matéria APMD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F7ED3',
  },
  sobre:{
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 'auto',
  }
});
