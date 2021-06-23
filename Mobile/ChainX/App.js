import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LandingPage} from './src/ui/landing-page/index.js'

/**
 * Main component of the application
 * @return @APP
 */
export default function App() {
  return (
    <LandingPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
