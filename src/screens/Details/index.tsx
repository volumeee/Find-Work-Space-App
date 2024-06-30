import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Details(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Ini Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Details;
