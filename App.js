import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntregasProvider from './controllers/EntregasController';

import Home from './views/Home';
import Sobre from './views/Sobre';

export default function App() {
  const Tab = createBottomTabNavigator();

  function AppProviders({ children }) {
    return <EntregasProvider>{children}</EntregasProvider>;
  }
  
  return (
    <AppProviders>
      <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
              name='Home'
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
              }}
            ></Tab.Screen>
            <Tab.Screen
              name='Sobre'
              component={Sobre}
              options={{
                tabBarLabel: 'Sobre',
                tabBarIcon: ({ color, size }) => <Ionicons name='information-circle-outline' color={color} size={size} />,
              }}
            ></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </AppProviders>
  );
}

