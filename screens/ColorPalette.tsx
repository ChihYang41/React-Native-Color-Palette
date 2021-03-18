import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { MainStackParamList } from '../App';

import ColorBox from '../components/ColorBox';
import { TColor } from '../utils/colors';

type ColorScreenRouteProp = RouteProp<MainStackParamList, 'ColorPalette'>;

type Props = {
  route: ColorScreenRouteProp;
};

export default function ColorPalette({ route }: Props) {
  const { colors, paletteName } = route.params;

  const renderColorBox = ({ item }: { item: TColor }) => {
    return <ColorBox colorName={item.colorName} hexColor={item.hexCode} />;
  };

  return (
    <FlatList
      style={styles.container}
      data={colors}
      renderItem={renderColorBox}
      keyExtractor={(item) => item.hexCode}
      ListHeaderComponent={<Text style={styles.title}>{paletteName}</Text>}
    />
  );
}

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
