import React, { Component, useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text } from "native-base";
import { BarCodeScanner } from "expo-barcode-scanner";

function BarCodeScannerView(props) {
  const navigation = props.navigation;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  function handleBarCodeScanned({ type, data }) {
    if (hasPermission === null) {
      alert("Requesting for camera permission");
      return;
    }
    if (hasPermission === false) {
      alert("No access to camera");
      return;
    }

    navigation.state.params.onGoBack(data);
    navigation.goBack();
  }

  return (
    <BarCodeScanner
      onBarCodeScanned={handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
  );
}

export default BarCodeScannerView;
