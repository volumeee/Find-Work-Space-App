import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Ini Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
