import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import ServiceDetails from '../views/ServiceDetails';

export default function HomeRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
    </Stack.Navigator>
  );
}