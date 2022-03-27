import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Tela1} from './src/screens/Tela1';
import {Tela2} from './src/screens/Tela2';

export type MovieData = {
  key: string;
  image: string;
  filme: string;
  ano: number;
  direcao: string;
  estilo: string;
  descricao: string;
};

export type RootStackParamList = {
  Tela1: undefined;
  Tela2: {
    data: MovieData;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
