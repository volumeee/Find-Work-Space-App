import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Success(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Ini Success</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Success;
