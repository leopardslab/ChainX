import {
  NativeBaseProvider,
  Box,
  useToast,
  Center,
  VStack,
  ScrollView,
  Heading,
  HStack,
  Select,
  CheckIcon,
  Alert,
} from "native-base";
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
import { RowData } from "../../components/RowData/index";
import { BatchData } from "../../components/BatchData/index";
import { useSelector, useDispatch } from "react-redux";
import {
  setProductSeachText,
  getProducts,
  setProductSeachStatus,
  getItemData,
  setItemBatchSelection,
} from "../../redux/actions";
import { renderMessage } from '../../language/lang-switch';

function getBatchData(itemData) {
  let output = [];
  if (itemData.batches) {
    itemData.batches.forEach((element) => {
      output.push(element.batchID);
    });
  }
  return output;
}

function handleBatchSelection(dispatch, selectedItem) {
  dispatch(setItemBatchSelection(selectedItem));
}

function ItemDetailScreen(props) {
  const {
    itemID,
    itemData,
    itemDataError,
    itemDataIsLoading,
    selectedItemNeutrition,
    selectedItemNeutritionSummery,
    selectedItemIngredients,
    selectedItemLegal,
    selectedItemFeeback,
    ingredientsSupplierData,
    selectedItemRating,
    isBatchSelected,
  } = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();

  const selectItemID = props.navigation.state.params.itemId;

  const toast = useToast();
  useEffect(() => {
    dispatch(getItemData(selectItemID));
  }, []);

  return (
    <NativeBaseProvider>
      <Box
        width={"100%"}
        height={3}
        rounded="md"
        _text={{
          color: "white",
        }}
        shadow={-1}
      />
      <ScrollView
        flex={1}
        px={2}
        _contentContainerStyle={{
          w: "100%",
        }}
      >
        <VStack space={2} alignItems="center">
          <RowData
            name={renderMessage("ProductName")}
            value={itemData.productName ? itemData.productName : ""}
            itemDataIsLoading={itemDataIsLoading}
          ></RowData>
          <RowData
            name={renderMessage("ProductCompany")}
            value={itemData.company ? itemData.company : ""}
            itemDataIsLoading={itemDataIsLoading}
          ></RowData>
          <RowData
            name={renderMessage("ProductCountry")}
            value={itemData.country ? itemData.country : ""}
            itemDataIsLoading={itemDataIsLoading}
          ></RowData>
          {!itemDataIsLoading && (
            <BatchData
              itemDetails={itemData}
              dropDownData={getBatchData(itemData)}
              neutritionData={selectedItemNeutrition}
              neutritionSummery={selectedItemNeutritionSummery}
              ingredientsData={selectedItemIngredients}
              ingredientsSupplierData={ingredientsSupplierData}
              legalData={selectedItemLegal}
              selectedItemFeeback={selectedItemFeeback}
              selectedItemRating={selectedItemRating}
              onBatchSelect={handleBatchSelection}
              isBatchSelected={isBatchSelected}
            ></BatchData>
          )}
          {itemDataIsLoading && (
            <Alert w="100%">
              <Alert.Icon />
              <Alert.Title>{renderMessage("Wait")}</Alert.Title>
              <Alert.Description>
                {renderMessage("WaitLoadingMessage")}
              </Alert.Description>
            </Alert>
          )}
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ItemDetailScreen;
