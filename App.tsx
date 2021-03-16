import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ColorBox from './components/ColorBox';

type Colors = {
  colorName: string;
  hexCode: string;
};

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {
  const renderColorBox = ({ item }: { item: Colors }) => {
    return <ColorBox colorName={item.colorName} hexColor={item.hexCode} />;
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          style={styles.container}
          data={COLORS}
          renderItem={renderColorBox}
          keyExtractor={(item) => item.hexCode}
          ListHeaderComponent={<Text style={styles.title}>Solarized</Text>}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
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
