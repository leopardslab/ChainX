import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation'; 
import  LandingPage  from '../ui/landing-page/index'
import  FlatListDemo  from '../ui/listView/index';
import BarCodeScannerView from '../ui/barcode-scanner/index';

const screens = {
    LandingPage: {
        screen: LandingPage,
        name : "Welcome"
    },
    ProductSearch:{
        screen: FlatListDemo
    },
    BarCodeScanner : {
        screen : BarCodeScannerView
    }
}
const HomeStack =  createStackNavigator(screens);


export default createAppContainer(HomeStack);
