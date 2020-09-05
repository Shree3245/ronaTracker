import React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import {NearbyAPI} from 'react-native-nearby-api';

export default function App() {
  const nearbyAPI = new NearbyAPI(true);
  nearbyAPI.connect('AIzaSyCij2A8KLyWsijfE5RoOSuxhgUICzVWn9o');

  return (
    <View style={styles.mainUI}>
      <Button title="Add New Item" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainUI: {
    padding: 50,
  },
});
