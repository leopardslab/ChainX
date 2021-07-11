import { NativeBaseProvider,Box } from 'native-base';
import React, { Component } from 'react';
import { View, Image, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import {DataList}  from '../../components/SearchList/index';
import SearchBar from '../../components/SearchBar/index';

const dataSet = [
    {
        id: "1",
        productName: "Apple",
        company: "Apple Company A",
        brand: "AppleBrnd1",
        barcode: "12345678980",
        country: "SL",
        imageURL : "http://placehold.it/200x200?text=Apple"
    },
    {
        id: "1",
        productName: "Orange",
        company: "Orange Company A",
        brand: "OrangeBrnd1",
        barcode: "12345678980",
        country: "SL",
        imageURL : "http://placehold.it/200x200?text=Orange"
    },
    {
        id: "1",
        productName: "Peanuts",
        company: "Peanuts Company A",
        brand: "PeanutsBrnd1",
        barcode: "12345678980",
        country: "SL",
        imageURL : "http://placehold.it/200x200?text=Peanuts"
    },
    
];

class FlatListDemo extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: dataSet,
            error: null,
        };

        this.arrayholder = dataSet;
    }

    componentDidMount() {
        //ToDo init request
    }

    searchDataSet = text => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.productName.toUpperCase()}}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };



    render() {
        return (
            <NativeBaseProvider>
                <Box style={{paddingTop:5,paddingLeft:10,paddingRight:10}}>
                <SearchBar onSearchTextChnage={this.searchDataSet}/>
                <DataList data={this.state.data}/>
                </Box>
            </NativeBaseProvider>

        )
    }
}



export default FlatListDemo;