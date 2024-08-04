import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Booking(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Ini Booking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Booking;
