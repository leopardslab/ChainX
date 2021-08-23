import { NativeBaseProvider, Box, useToast } from "native-base";
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { DataList } from "../../components/SearchList/index";
import {SearchBar} from "../../components/SearchBar/index";
import { LANDING_PAGE_BACKGROUND_IMAGE } from "../../images-ref/index";
import { useSelector, useDispatch } from "react-redux";
import { setProductSeachText,getProducts,setProductSeachStatus } from '../../redux/actions';

function FlatListDemo(props) {
  const {searchText,searchResult,searchError,isLoading} = useSelector(state => state.searchReducer);
  const dispatch = useDispatch();
  const toast = useToast();

  const navigator = props.navigation.navigate;

  useEffect(() => {
    dispatch(getProducts(""));
  },[]);

  function searchDataSet(text) {
    dispatch(setProductSeachText(text));
    dispatch(setProductSeachStatus(true));
    dispatch(getProducts(text));
    
  }

  function onBarcodeIconClicked(){
    navigator('BarCodeScanner', {
        onGoBack: searchDataSet,
      });
  }

  function showError(){
    ToastAndroid.showWithGravity(
      "An Error occurred while getting data. Please Try again.",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
  }

  function goToNextScreen(itemID){
    navigator("ItemDetail",{
          itemId: itemID,
        });
  }

  return (
    <NativeBaseProvider>
      <Box style={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
        <SearchBar isLoading={isLoading} onSearchTextChnage={searchDataSet} searchVal={searchText} onBarcodeIconClicked={onBarcodeIconClicked}/>
        <DataList data={searchResult} goToNextScreen={goToNextScreen}/>
        { searchError && showError()}
      </Box>
    </NativeBaseProvider>
  );
};

export default FlatListDemo;
