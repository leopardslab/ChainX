import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation'; 
import  LandingPage  from '../ui/landing-page/index'
import  FlatListDemo  from '../ui/listView/index';
import BarCodeScannerView from '../ui/barcode-scanner/index';
import ItemDetailScreen from '../ui/product-data/index';
import { renderMessage } from '../language/lang-switch';

const screens = {
    
    LandingPage: {
        screen: LandingPage,
        navigationOptions: ({ navigation }) => ({
            title: renderMessage("Welcome"),
        })
    },
    ItemDetail : {
        screen : ItemDetailScreen,
        navigationOptions: ({ navigation }) => ({
            title: renderMessage("ProductDetails"),
        })
    },
    ProductSearch:{
        screen: FlatListDemo,
        navigationOptions: ({ navigation }) => ({
            title: renderMessage("ProductSearch"),
        })
    },
    BarCodeScanner : {
        screen : BarCodeScannerView,
        navigationOptions: ({ navigation }) => ({
            title: renderMessage("Barcode"),
        })
    }, 
}
const HomeStack =  createStackNavigator(screens);


export default createAppContainer(HomeStack);
