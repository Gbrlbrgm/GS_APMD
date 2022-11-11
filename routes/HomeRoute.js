import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Opcoes from '../views/Opcoes';

export default function HomeRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='Opcoes' component={Opcoes}></Stack.Screen>
    </Stack.Navigator>
  );
}
