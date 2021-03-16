import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colors
        </Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.text}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
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
