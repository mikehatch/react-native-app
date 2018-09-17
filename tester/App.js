import React from 'react';
<<<<<<< HEAD:Awe/App.js
import { StyleSheet, Text, View, Image } from 'react-native';
import Geo from './GeoWithMap';
=======
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 89dad7b9c9efe7a608b76bef320ec2abaed12c93:tester/App.js

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD:Awe/App.js
      {/* yo ho */}
        <Geo></Geo>
=======
        <Text>Shake your phone to open the developer menu.</Text>
>>>>>>> 89dad7b9c9efe7a608b76bef320ec2abaed12c93:tester/App.js
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
