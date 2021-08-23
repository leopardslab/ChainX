import { Box, HStack, Modal, Input, Button } from "native-base";
import { Text } from "react-native";
import React, { Component, useState, useEffect } from "react";
import { Rating } from "react-native-ratings";
import { useSelector, useDispatch } from "react-redux";
import { setUserComment, setUserRatingModalVisible } from "../../redux/actions";
import { renderMessage } from '../../language/lang-switch';

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
        
        <Modal.Header>{renderMessage("UserFeedbackModalHeading")}</Modal.Header>
        <Modal.Body>
        {renderMessage("UserFeedbackModalTitle")}
          <Input
            mt={4}
            placeholder={renderMessage("UserFeedbackModalPlaceHolder")}
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
              {renderMessage("Save")}
            </Button>
            <Button colorScheme="secondary"
            onPress={() => {
                dispatch(setUserRatingModalVisible(false));
              }}
              >{renderMessage("Close")}</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
