import { Box, HStack, Spinner,Heading } from "native-base";
import { Text } from "react-native";
import React, { Component, useState, useEffect } from "react";
export function RowData(props) {
  const name = props.name;
  const value = props.value;
  const itemDataIsLoading = props.itemDataIsLoading;
  return (
    <Box
      width={"100%"}
      height={10}
      rounded="md"
      _text={{
        color: "white",
      }}
      shadow={3}
    >
      <Box>
        <HStack space={3} alignItems="center">
          <Box pl={3} pt={3} width={"40%"}>
            <Heading bold={true} size={"sm"}>{name}</Heading>
          </Box>
          <Box pt={3} width={"40%"}>
          {!itemDataIsLoading && <Text>{value}</Text>}
          {itemDataIsLoading && <Spinner color="green.400" size={"sm"} />}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
