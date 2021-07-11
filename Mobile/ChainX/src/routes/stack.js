import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation'; 
import  LandingPage  from '../ui/landing-page/index'
import  FlatListDemo  from '../ui/listView/index';
const screens = {
    LandingPage: {
        screen: LandingPage,
        name : "Welcome"
    },
    ProductSearch:{
        screen: FlatListDemo
    }
}
const HomeStack =  createStackNavigator(screens);


export default createAppContainer(HomeStack);
