import React from 'react';
import {
  NavigationContainer,
  CompositeNavigationProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';
import { TPalette } from './utils/colors';

type HomeParams = {
  newPalette: TPalette;
};

export type RootStackParamList = {
  Main: undefined;
  ColorPaletteModal: undefined;
};

export type MainStackParamList = {
  Home: HomeParams;
  ColorPalette: TPalette;
};

export type MainNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

const RootStack = createStackNavigator<RootStackParamList>();
const MainStack = createStackNavigator<MainStackParamList>();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
