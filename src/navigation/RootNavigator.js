import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { navigationRef } from './NavigationService';
import ProfileScreen from '../screens/ProfileScreen';



const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  // const data = useSelector((state) => state.apiReducer?.loginData?.token);
  // console.log('fgfg',data)
  
  
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator