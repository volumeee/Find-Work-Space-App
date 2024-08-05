import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Checkout(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Ini Checkout</Text>
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

export default Checkout;
