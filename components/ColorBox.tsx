import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TProps = {
  colorName: string;
  hexColor: string;
};

const ColorBox = ({ colorName, hexColor }: TProps) => {
  const colorStyle = {
    backgroundColor: hexColor,
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={styles.text}>
        {colorName}: {hexColor}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
