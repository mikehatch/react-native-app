import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Geo from './GeoWithMap';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      {/* yo ho */}
        <Geo></Geo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
