
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login';
import Create from './screens/create';
import Services from './screens/services';
import Schools from './screens/schools';
import Fire from './components/fire';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
        />
        <Stack.Screen 
          name="Create" 
          component={Create} 
        />
        <Stack.Screen 
          options={{headerShown: false}}
          name="Services" 
          component={Services}           
        />
        <Stack.Screen 
          options={{headerShown: false}}
          name="Schools" 
          component={Schools}           
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;