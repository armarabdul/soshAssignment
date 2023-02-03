import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen here</Text>
      <View
        style={{
          marginTop: 10,
          width: '50%',
          height: 3,
          backgroundColor: 'black',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
});

export default Screen;
