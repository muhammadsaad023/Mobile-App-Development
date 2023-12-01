import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/login';
import Cv from './component/cv';
import CvDisplay from './component/CvDisplay';
import RegistrationScreen from './component/RegistrationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Register' component={RegistrationScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cv' component={Cv} />
        <Stack.Screen name='CvDisplay' component={CvDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import AsyncStorage from '@react-native-async-storage/async-storage';

// // To clear the entire local storage
// const clearLocalStorage = async () => {
//   try {
//     await AsyncStorage.clear();
//     console.log('Local storage cleared successfully.');
//   } catch (error) {
//     console.error('Error clearing local storage:', error);
//   }
// };

// // Call the function wherever you need to clear the local storage
// clearLocalStorage();

