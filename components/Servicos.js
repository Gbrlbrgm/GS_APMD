import { StyleSheet, Text, View } from 'react-native';
import Item from './Item';
import ServicesMock from '../data/MockServicos';

export default function Servicos() {
  return (
    <View style={styles.container}>
      <View style={styles.textBorder}>
        <Text style={styles.title}>Serviços Drone</Text>
      </View>
      <View style={styles.servicesGrid}>
        <Item data={ServicesMock[0]}></Item>
        <Item data={ServicesMock[1]}></Item>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  title: {
    textTransform: 'uppercase',
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '900',
    paddingBottom: 10,
  },

  subtitle: {
    textTransform: 'capitalize',
    fontSize: 20,
    textAlign: 'center',
    color: '#F9F871',
    fontWeight: '500',
    paddingBottom: 10,
  },

  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },

  textBorder: {
    marginHorizontal: 25,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#00004F',
  },
});