import React, { useState, useRef, useEffect } from "react";
// import { Text, View, Button, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';
import { LANDING_PAGE_BACKGROUND_IMAGE } from '../../images-ref'
import { splashScreenStyles } from './styles'
import { NativeBaseProvider, Progress, Box, Text, Divider, Flex, Center } from 'native-base';
import { renderMessage } from '../../language/lang-switch'



export default class LandingPage extends React.Component {
   

  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
      loadingText: renderMessage("loadingPageMessage"),
      loadingProgressValue: 1
    }
  }
  

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(prevState => {
      return {loadingProgressValue: prevState.loadingProgressValue + 10}
    });
    if(this.state.loadingProgressValue >= 100){
      clearInterval(this.timerID);
      this.navigation.navigate("ProductSearch");
    }
  }


  render() {
   
    return (
      <NativeBaseProvider>
        <Center flex={1}>
          <Box w="100%">
            <Center>
              <Flex direction="row" p={3}>
                <Text>{renderMessage("LoadingMessage01")}</Text>
                <Divider bg="green.500" size={3} mx={4} orientation="vertical" />
                <Text>{renderMessage("LoadingMessage02")}</Text>
                <Divider bg="blue.500" size={3} mx={4} orientation="vertical" />
                <Text>{renderMessage("LoadingMessage03")}</Text>
              </Flex>
            </Center>
            <Progress colorScheme="emerald" size="lg" value={this.state.loadingProgressValue} mx={10} />
          </Box>
        </Center>
    </NativeBaseProvider>
      
    );
  }
}