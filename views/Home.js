import Header from '../components/Header';
import Servicos from '../components/Servicos';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Servicos></Servicos>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F7ED3',
  },
});
