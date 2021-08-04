import { NativeBaseProvider, Box } from "native-base";
import React, { Component, useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { DataList } from "../../components/SearchList/index";
import {SearchBar} from "../../components/SearchBar/index";
import { LANDING_PAGE_BACKGROUND_IMAGE } from "../../images-ref/index";

const dataSet = [
  {
    id: "1",
    productName: "Apple",
    company: "Apple Company A",
    brand: "AppleBrnd1",
    barcode: "12345678980",
    country: "SL",
    imageURL: LANDING_PAGE_BACKGROUND_IMAGE,
  },
  {
    id: "1",
    productName: "Orange",
    company: "Orange Company A",
    brand: "OrangeBrnd1",
    barcode: "555512345678980",
    country: "SL",
    imageURL: LANDING_PAGE_BACKGROUND_IMAGE,
  },
  {
    id: "1",
    productName: "Peanuts",
    company: "Peanuts Company A",
    brand: "PeanutsBrnd1",
    barcode: "4790015010281",
    country: "SL",
    imageURL: LANDING_PAGE_BACKGROUND_IMAGE,
  },
];

function FlatListDemo(props) {
  const arrayholder = dataSet;
  const navigator = props.navigation.navigate;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(dataSet);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  function searchDataSet(text) {
    setValue(text);

    const newData = arrayholder.filter((item) => {
      const itemBarcode = `${item.barcode.toUpperCase()}}`;
      const itemData = `${item.productName.toUpperCase()}}`;
      const textData = text.toUpperCase();

      return (
        itemData.indexOf(textData) > -1 || itemBarcode.indexOf(textData) > -1
      );
    });
    setData(newData);
  }

  function onBarcodeIconClicked(){
    navigator('BarCodeScanner', {
        onGoBack: searchDataSet,
      });
  }

  return (
    <NativeBaseProvider>
      <Box style={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
        <SearchBar onSearchTextChnage={searchDataSet} searchVal={value} onBarcodeIconClicked={onBarcodeIconClicked}/>
        <DataList data={data} />
      </Box>
    </NativeBaseProvider>
  );
};

export default FlatListDemo;
