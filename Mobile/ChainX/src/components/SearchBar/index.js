import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Spinner } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { renderMessage } from '../../language/lang-switch';


export function SearchBar(props){
  const searchValue = props.searchVal;
  const isLoading = props.isLoading;
  const onBarcodeIconClicked = props.onBarcodeIconClicked;

  function searchText (text){
      props.onSearchTextChnage(text);
  }
  return (
      <Center width="100%" space={2}>
        <Input
          placeholder={renderMessage("SearchProductPlaceHolder")}
          variant="filled"
          width="100%"
          bg="gray.200"
          borderRadius={15}
          onChangeText={(text) => {searchText(text); }}
          value = {searchValue}
          py={1}
          px={2}
          InputLeftElement={isLoading?<Spinner ml={2} size={5} size="sm" />:<Icon size='sm' ml={2} size={5} color="gray.500" as={<Ionicons name="ios-search" />} />}
          InputRightElement={<Icon size='sm' mr={1} size={8} color="gray.600" as={<Ionicons name="barcode-outline" onPress={() => onBarcodeIconClicked()} /> } />}
        />
      </Center>
  )
}
