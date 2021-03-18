import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';

import { MainStackParamList, MainNavigationProp } from '../App';
import PalettePreview from '../components/PalettePreview';
import { TPalette } from '../utils/colors';

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, 'Home'>,
  MainNavigationProp
>;

type TProps = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: TProps) {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (result.ok) {
      const colors = await result.json();
      setColorPalettes(colors);
    }

    return result;
  }, []);

  const renderPalettePreview = ({ item }: { item: TPalette }) => {
    return (
      <PalettePreview
        handlePress={() => navigation.navigate('ColorPalette', item)}
        colorPalette={item}
      />
    );
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();

    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    <FlatList
      style={styles.container}
      data={colorPalettes}
      renderItem={renderPalettePreview}
      keyExtractor={(item) => item.paletteName}
      ListHeaderComponent={() => (
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => navigation.navigate('ColorPaletteModal')}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    marginVertical: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
