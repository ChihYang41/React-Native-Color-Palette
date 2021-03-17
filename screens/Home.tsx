import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../App';
import PalettePreview from '../components/PalettePreview';
import { COLOR_PALETTES, TPalette } from '../utils/colors';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type TProps = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: TProps) {
  const renderPalettePreview = ({ item }: { item: TPalette }) => {
    return (
      <PalettePreview
        handlePress={() => navigation.navigate('ColorPalette', item)}
        colorPalette={item}
      />
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={COLOR_PALETTES}
      renderItem={renderPalettePreview}
      keyExtractor={(item) => item.paletteName}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
