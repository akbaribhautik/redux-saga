import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';


const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <>
    <Stack.Navigator >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  </>
  )
}

export default AuthNavigator