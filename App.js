import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Serviços Drone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#0D125E',
    color: '#FFF',
    padding: 24,
    width: '100%',
  },
});
