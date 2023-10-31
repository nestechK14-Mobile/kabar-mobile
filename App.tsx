import { LogBox, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {

  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});