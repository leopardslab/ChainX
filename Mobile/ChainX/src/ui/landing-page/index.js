import React from 'react';
import { Text, View, Button, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';
import { LANDING_PAGE_BACKGROUND_IMAGE } from '../../images-ref'
import { splashScreenStyles } from './styles'

export class LandingPage extends React.Component {
  state = {
    loadingText: 'Wait... we are loading....'
 }
  render() {
    return (
      <View style={splashScreenStyles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"

        ></StatusBar>

        <ImageBackground
          style={splashScreenStyles.image}
          source={LANDING_PAGE_BACKGROUND_IMAGE}
        >
          <ActivityIndicator size="large" color="#00ff00" style={splashScreenStyles.loadingSpinner}>
          </ActivityIndicator>
          <Text style={splashScreenStyles.loadingText}>{this.state.loadingText}</Text>
        </ImageBackground>

      </View>
    );
  }
}