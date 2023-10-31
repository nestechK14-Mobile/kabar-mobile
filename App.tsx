import { LogBox, StyleSheet, Text, View } from 'react-native';
import React from 'react';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {

  return (
    <View style = {{flex: 1}}>
      <Text>
        Hello!!!!!
      </Text>
    </View>

  );
};

export default App;

const styles = StyleSheet.create({});