import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import { MainStackParamList, MainNavigationProp } from '../App';
import PalettePreview from '../components/PalettePreview';
import { TPalette } from '../utils/colors';

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, 'Home'>,
  MainNavigationProp
>;

type HomeScreenRouteProps = RouteProp<MainStackParamList, 'Home'>;

type TProps = {
  route: HomeScreenRouteProps;
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation, route }: TProps) {
  const [colorPalettes, setColorPalettes] = useState<TPalette[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const newPalette: TPalette | undefined = route?.params?.newPalette;

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

  const handleOpenModal = () => {
    navigation.navigate('ColorPaletteModal');
  };

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  useEffect(() => {
    if (newPalette) {
      setColorPalettes((current) => [newPalette, ...current]);
    }
  }, [newPalette]);

  return (
    <FlatList
      style={styles.container}
      data={colorPalettes}
      renderItem={renderPalettePreview}
      keyExtractor={(item) => item.paletteName}
      ListHeaderComponent={() => (
        <TouchableOpacity onPress={handleOpenModal}>
          <Text style={styles.buttonText}>Add a color scheme</Text>
        </TouchableOpacity>
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
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00A0B0',
    marginVertical: 15,
  },
});
