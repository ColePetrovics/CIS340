import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button
          onPress={() => {
            alert('Your tapped a button 1');
          }}
          title="Press Button 1"
        />
      </View>

      <View style={styles.containerLayoutButton}>
        <Button
          onPress={() => {
            alert('Your tapped a button 2');
          }}
          title="Press Button 2"
        />

        <Button
          onPress={() => {
            alert('Your tapped a button Great');
          }}
          title="Great"
          color='green'
        />  
      </View>

      <View style={styles.containerButton}>
        <Button
          onPress={() => {
            alert('Your tapped a button 5');
          }}
          title="Press Button 5"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerButton: {
    margin: 20,
  },
  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
