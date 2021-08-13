import { Box, HStack, Modal, Input, Button } from "native-base";
import { Text } from "react-native";
import React, { Component, useState, useEffect } from "react";
import { Rating } from "react-native-ratings";
import { useSelector, useDispatch } from "react-redux";
import { setUserComment, setUserRatingModalVisible } from "../../redux/actions";

export function RatingModal(props) {
  const [ratingInput, setRatingInput] = useState(0);
  const [commentInput, setCommentInput] = useState("");
  const isOpen = props.showModal;

  const dispatch = useDispatch();

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  return (
    <Modal isOpen={isOpen}>
      <Modal.Content>
        
        <Modal.Header>Customer feedback</Modal.Header>
        <Modal.Body>
          Provide rating value and comment
          <Input
            mt={4}
            placeholder="Your comment goes here :)"
            value={commentInput}
            onChange={handleCommentChange}
          />
          <Rating
            startingValue={ratingInput}
            jumpValue={0.5}
            type="heart"
            ratingCount={5}
            imageSize={40}
            showRating
            onFinishRating={(rate) => {
              setRatingInput(rate);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button.Group variant="ghost" space={2}>
            <Button
              onPress={() => {
                dispatch(setUserComment({ commentInput, ratingInput }));
              }}
            >
              SAVE
            </Button>
            <Button colorScheme="secondary"
            onPress={() => {
                dispatch(setUserRatingModalVisible(false));
              }}
              >CLOSE</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
