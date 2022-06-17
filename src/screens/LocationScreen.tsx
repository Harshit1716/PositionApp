import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as Location from "expo-location";
import { useAppDispatch, useAppSelector } from "../redux/ReduxHooks";
import { addLocation } from "../redux/UserLocationSlice";
import RootNavigation from "../navigation/RootNavigation";

export default function App() {
  const list = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const MINUTE_5_MS = 300000;
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getloaction();
  }, [flag]);
  /* istanbul ignore next */
  const postRequest = (location_name: string) => {
    const data = { location_name: location_name, time: new Date() };
    fetch(`https://httpstat.us/200`, {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response && JSON.stringify(response.status) == "200") {
          setTimeout(() => {
            setFlag(!flag);
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };
  /* istanbul ignore next */
  function getLocationName(location: any) {
    const API_KEY = "afa38bbd76e44a78a05b11c85639e62a";
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${location.coords.latitude}+${location.coords.longitude}&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((res) => {
        if (res && res.results && res.results.length) {
          let result: any = res.results[0];

          if (list.length <= 30) {
            dispatch(
              addLocation({
                latitude: location?.coords?.latitude ?? 0,
                longitude: location?.coords?.latitude ?? 0,
                name: result.formatted,
              })
            );
            postRequest(result.formatted);
          }
        }
      })
      .catch((err) => console.error(err));
  }
  /* istanbul ignore next */
  async function getloaction() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
      getLocationName(location);
    }
  }

  return (
    <View testID="LocationScreen" style={styles.container}>
      <RootNavigation></RootNavigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 8,
  },
});
