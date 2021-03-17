import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TPalette } from '../utils/colors';

type TProps = {
  handlePress: () => void;
  colorPalette: TPalette;
};

function PalettePreview({ handlePress, colorPalette }: TProps) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View>
        <Text style={styles.text}>{colorPalette.paletteName}</Text>
        <FlatList
          style={styles.colors}
          data={colorPalette.colors.slice(0, 5)}
          renderItem={({ item }) => (
            <View style={[styles.box, { backgroundColor: item.hexCode }]} />
          )}
          keyExtractor={(item) => item.hexCode}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  colors: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  box: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default PalettePreview;
