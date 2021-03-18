import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList, MainNavigationProp } from '../App';
import { COLORS, TColor } from '../utils/colors';

type ModalScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'ColorPaletteModal'>,
  MainNavigationProp
>;

type TProps = {
  navigation: ModalScreenNavigationProp;
};

export default function ColorPaletteModal({ navigation }: TProps) {
  const [selectedColors, setSelectedColors] = useState<TColor[]>([]);
  const [name, setName] = useState('');

  const handleUpdate = (value: boolean, color: TColor) => {
    if (value) {
      setSelectedColors((currentColors) => [...currentColors, color]);
    } else {
      setSelectedColors((currentColors) =>
        currentColors.filter((c) => c.colorName !== color.colorName),
      );
    }
  };

  const handleSubmit = () => {
    if (!name) {
      Alert.alert('Please input palette name');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please pick at lease 3 colors');
    } else {
      const newPalette = {
        paletteName: name,
        colors: selectedColors,
      };

      navigation.navigate('Home', { newPalette });
    }
  };

  const renderColorToggle = ({ item }: { item: TColor; index: number }) => {
    const isActive: boolean = !!selectedColors.find(
      (color: TColor) => color.colorName === item.colorName,
    );
    return (
      <View style={styles.toggleContainer}>
        <Text>{item.colorName}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => handleUpdate(value, item)}
          value={isActive}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Please input palette name"
      />
      <FlatList
        data={COLORS}
        renderItem={renderColorToggle}
        keyExtractor={(item) => item.colorName}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
  toggleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
  textInput: {
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 12,
  },
  button: {
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#53777A',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
