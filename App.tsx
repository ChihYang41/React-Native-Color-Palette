import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colors
        </Text>
        <ColorBox colorName="Cyan" hexColor="#2aa198" />
        <ColorBox colorName="Blue" hexColor="#268bd2" />
        <ColorBox colorName="Magenta" hexColor="#d33682" />
        <ColorBox colorName="Orange" hexColor="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
  },
  safeArea: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default App;
