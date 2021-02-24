/* eslint-disable prettier/prettier */

import LoginScreen from './view/LoginScreen';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Cadastrar from './view/Cadastrar';
import home from './view/Home/home';
import Paginacao from './view/Paginacao';

const Stack = createStackNavigator();
export default function Rotas()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen  name="login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen  name="cadastrar" component={Cadastrar} options={{headerShown:false}}/>
        <Stack.Screen  name="home" component={home} options={{headerShown:false}}/>
        <Stack.Screen  name="pag" component={Paginacao} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
