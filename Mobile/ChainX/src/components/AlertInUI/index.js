import { Alert } from "native-base";
import React, { Component, useState, useEffect } from "react";
import { renderMessage } from "../../language/lang-switch";

export function AlertMessages(props) {
  const alertMessageKey = props.alertMessageKey;
  return (
    <Alert w="100%">
      <Alert.Icon />
      <Alert.Title>{renderMessage(alertMessageKey)}</Alert.Title>
    </Alert>
  );
}
