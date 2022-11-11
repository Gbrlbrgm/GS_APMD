import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Entregas Drone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    backgroundColor: '#1B357E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  logo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#f2f2f2',
    fontWeight: '900',
  }
});
