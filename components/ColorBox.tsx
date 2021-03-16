import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TProps = {
  style?: object;
  colorName: string;
  hexColor: string;
};

const ColorBox = ({ colorName, hexColor }: TProps) => {
  const boxColor = {
    backgroundColor: hexColor,
  };

  const textColor = {
    color:
      parseInt(hexColor.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.text, textColor]}>
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
