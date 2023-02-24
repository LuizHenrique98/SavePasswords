import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import PasswordRegistration from '../screens/PasswordRegistration';

import { colors } from '../global/colors';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />

                <Stack.Screen 
                  name='PasswordRegistration' 
                  component={PasswordRegistration} 
                  options={{
                    title: 'Registrar senha', 
                    headerTintColor: colors.white, 
                    headerStyle: 
                        {backgroundColor: colors.background}}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}