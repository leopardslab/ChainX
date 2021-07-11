import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function SearchBar(props){
  const searchText = (text) =>{
      props.onSearchTextChnage(text);
  }
  return (
      <Center width="100%" space={2}>
        <Input
          placeholder="Serach Product"
          variant="filled"
          width="100%"
          bg="gray.200"
          borderRadius={15}
          onChangeText={(text) => {searchText(text); }}
          py={1}
          px={2}
          InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.500" as={<Ionicons name="ios-search" />} />}
        />
      </Center>
  )
}
