import { Box, HStack } from "native-base";
import { Text } from "react-native";
import React, { Component, useState, useEffect } from "react";
export function RowData(props) {
  const name = props.name;
  const value = props.value;
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
            <Text>{name}</Text>
          </Box>
          <Box pt={3} width={"40%"}>
            <Text>{value}</Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
