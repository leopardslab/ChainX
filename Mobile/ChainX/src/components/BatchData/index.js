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
  Accordion,
  Icon,
  Badge,
  Button,
  Row,
  IconButton,
} from "native-base";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { Component, useState, useEffect } from "react";
import { Text, Linking } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RatingModal } from "../../components/modal/index";
import { setUserRatingModalVisible } from "../../redux/actions";
import { renderMessage } from "../../language/lang-switch";
import { AlertMessages } from '../AlertInUI/index';

function loadInBrowser(url) {
  Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
}

export function BatchData(props) {
  const itemData = props.itemDetails;
  const batchDropDownData = props.dropDownData || [];

  const neutritionData = props.neutritionData || [];
  const neutritionSummery = props.neutritionSummery || [];
  const ingredientsData = props.ingredientsData || [];
  const ingredientsSupplierData = props.ingredientsSupplierData || [];
  const legalData = props.legalData || [];
  const selectedItemFeeback = props.selectedItemFeeback || [];
  const onBatchSelect = props.onBatchSelect;
  const selectedItemRating = props.selectedItemRating || "N/A";
  const isBatchSelected = props.isBatchSelected;

  const itemDataIsLoading = props.itemDataIsLoading;

  const dispatch = useDispatch();
  const { modalVisible, comment, rating } = useSelector(
    (state) => state.userCommentReducer
  );

  return (
    <Box
      width={"100%"}
      rounded="md"
      px={2}
      pt={2}
      _text={{
        color: "white",
      }}
      shadow={3}
    >
      <Select
        mt={2}
        height={20}
        accessibilityLabel="Select batch"
        placeholder="Select batch"
        onValueChange={(itemValue) => onBatchSelect(dispatch, itemValue)}
        _selectedItem={{
          bg: "cyan.600",
          endIcon: <CheckIcon size={4} />,
        }}
      >
        <Select.Item label={"Select item"} value={"NoValue"} key={123} />
        {batchDropDownData &&
          batchDropDownData.map((obj, index) => {
            return <Select.Item label={obj} value={obj} key={index} />;
          })}
      </Select>

      <Accordion index={[0, 1]} allowMultiple={true}>
        <Accordion.Item>
          <Accordion.Summary _expanded={{ backgroundColor: "green.200" }}>
            <Heading size={"md"}>
              <Icon
                color={"green.500"}
                size={5}
                as={<Ionicons name="md-fitness" />}
              />{" "}
              {renderMessage("Neutritions")}
            </Heading>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <Text>
              {isBatchSelected &&
                neutritionData &&
                neutritionData.length != 0 &&
                neutritionSummery}
            </Text>
            <ScrollView horizontal>
              <HStack space={2} pb={2} pt={2} alignItems="center">
                {isBatchSelected &&
                  neutritionData &&
                  neutritionData.length != 0 &&
                  neutritionData.map((obj, index) => {
                    return (
                      <Center
                        size={20}
                        bg={obj.colour ? obj.colour : "#878f99"}
                        rounded="md"
                        _text={{
                          color: "black",
                        }}
                        shadow={3}
                        key={index}
                      >
                        <Center
                          bg={obj.colour}
                          _text={{
                            color: "black",
                            bold: true,
                          }}
                        >
                          {obj.name}
                        </Center>
                        {`${obj.value} `}
                      </Center>
                    );
                  })}
                {!isBatchSelected && (
                  <AlertMessages alertMessageKey="NeutritionsSelectBatch" />
                )}
                {isBatchSelected &&
                  neutritionData &&
                  neutritionData.length == 0 && (
                    <AlertMessages alertMessageKey="NoNeutritionsData" />
                  )}
              </HStack>
            </ScrollView>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary _expanded={{ backgroundColor: "green.200" }}>
            <Heading size={"md"}>
              <Icon
                color={"green.500"}
                size={5}
                as={<Ionicons name="md-fast-food-sharp" />}
              />{" "}
              {renderMessage("Ingredients")}
            </Heading>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <ScrollView horizontal>
              <HStack space={2} pb={2} pt={2} alignItems="center">
                {isBatchSelected &&
                  ingredientsData &&
                  ingredientsData.length > 0 &&
                  ingredientsData.map((obj, index) => {
                    return (
                      <Button
                        size={20}
                        bg="#878f99"
                        rounded="md"
                        _text={{
                          color: "black",
                        }}
                        shadow={5}
                        key={index}
                        onPress={() => loadInBrowser(obj.refLink)}
                      >
                        <Center
                          _text={{
                            color: "black",
                            bold: true,
                          }}
                        >
                          {obj.name}
                        </Center>
                      </Button>
                    );
                  })}
                {!isBatchSelected && (
                  <AlertMessages alertMessageKey="IngredientsSelectBatch" />
                )}
                {isBatchSelected &&
                  ingredientsData &&
                  ingredientsData.length == 0 && (
                    <AlertMessages alertMessageKey="NoIngredientsData" />
                  )}
              </HStack>
            </ScrollView>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary _expanded={{ backgroundColor: "green.200" }}>
            <Heading size={"md"}>
              <Icon
                color={"green.500"}
                size={5}
                as={<Ionicons name="md-infinite" />}
              />{" "}
              {renderMessage("Suppliers")}
            </Heading>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <ScrollView horizontal>
              <HStack space={2} pb={2} pt={2} alignItems="center">
                {isBatchSelected &&
                  ingredientsSupplierData &&
                  ingredientsSupplierData.map((obj, index) => {
                    return (
                      <Center
                        size={40}
                        bg="#878f99"
                        rounded="md"
                        mx={1}
                        _text={{
                          color: "black",
                          bold: true,
                        }}
                        shadow={3}
                        key={index}
                      >
                        {`${obj.name} `}
                      </Center>
                    );
                  })}
                {!isBatchSelected && (
                  <AlertMessages alertMessageKey="SuppliersSelectBatch" />
                )}
                {isBatchSelected &&
                  ingredientsSupplierData &&
                  ingredientsSupplierData.length == 0 && (
                    <AlertMessages alertMessageKey="NoSupplierData" />
                  )}
              </HStack>
            </ScrollView>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary _expanded={{ backgroundColor: "green.200" }}>
            <Heading size={"md"}>
              <Icon
                color={"green.500"}
                size={5}
                as={<Ionicons name="md-briefcase" />}
              />{" "}
              {renderMessage("Legal")}
            </Heading>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <VStack space={1} pb={2} pt={1}>
              {legalData &&
                legalData.map((obj, index) => {
                  return (
                    <HStack space={1} width={"100%"} key={index}>
                      <Center
                        width={"28%"}
                        bg="#878f99"
                        rounded="md"
                        pt={2}
                        pl={0}
                        pb={2}
                        _text={{
                          color: "black",
                        }}
                        shadow={3}
                      >
                        {obj.date}
                      </Center>
                      <Box
                        pt={2}
                        pl={1}
                        pb={1}
                        bg="#878f99"
                        rounded="md"
                        width={"65%"}
                        _text={{
                          color: "black",
                        }}
                      >
                        {obj.description}
                      </Box>
                      <Center
                        pt={2}
                        pl={1}
                        pr={1}
                        bg="#878f99"
                        rounded="md"
                        width={"5%"}
                        _text={{
                          color: "black",
                        }}
                      >
                        <Icon
                          color={"#000000"}
                          size={3}
                          as={
                            <Ionicons
                              name="md-link"
                              onPress={() => loadInBrowser(obj.Link)}
                            />
                          }
                        />
                      </Center>
                    </HStack>
                  );
                })}
              {legalData && legalData.length == 0 && (
                <AlertMessages alertMessageKey="NoLegalData" />
              )}
            </VStack>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary _expanded={{ backgroundColor: "green.200" }}>
            <HStack space={1} pb={2} pt={2} alignItems="center">
              <Heading size={"md"} pt={1}>
                <Icon
                  color={"green.500"}
                  size={5}
                  as={<Ionicons name="md-chatbubble-ellipses" />}
                />{" "}
                {renderMessage("UserFeedback")}{" "}
              </Heading>
              <Badge tm={5} colorScheme="info">
                {"" + selectedItemRating}
              </Badge>
              <IconButton
                bg={"red"}
                onPress={() => {
                  dispatch(setUserRatingModalVisible(true));
                }}
                variant="solid"
                icon={
                  <Icon
                    ml={"25%"}
                    size={5}
                    style={{ color: "green" }}
                    as={
                      <MaterialCommunityIcons
                        name="comment-edit-outline"
                        size={5}
                      />
                    }
                    color="white"
                  />
                }
              />
            </HStack>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            <VStack space={1} pb={2} pt={1}>
              {selectedItemFeeback &&
                selectedItemFeeback.map((obj, index) => {
                  return (
                    <HStack space={1} width={"100%"} key={index}>
                      <Center
                        width={"25%"}
                        rounded="md"
                        pt={2}
                        pl={0}
                        pb={2}
                        _text={{
                          color: "black",
                        }}
                        shadow={0}
                      >
                        <Badge tm={5} colorScheme="info">
                          {"" + obj.date}
                        </Badge>
                      </Center>
                      <Center
                        width={"75%"}
                        bg="#878f99"
                        rounded="md"
                        pt={2}
                        pl={0}
                        pb={2}
                        _text={{
                          color: "black",
                        }}
                        shadow={3}
                      >
                        {obj.comment}
                      </Center>
                    </HStack>
                  );
                })}
              {selectedItemFeeback && selectedItemFeeback.length == 0 && (
                <AlertMessages alertMessageKey="NoFeedbackData" />
              )}
            </VStack>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
      <RatingModal showModal={modalVisible}></RatingModal>
    </Box>
  );
}
