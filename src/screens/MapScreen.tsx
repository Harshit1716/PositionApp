import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/ReduxHooks";
interface userState {
  location: string;
  long: number;
  lat: number;
  time: number;
}

export default function App() {
  const list = useAppSelector((state) => state.user);

  return (
    <View testID="mapContainer" style={styles.container}>
      <MapView
        testID="mapView"
        style={styles.map}
        initialRegion={{
          latitude: list?.[0]?.lat ?? 37.78825,
          longitude: list?.[0]?.long ?? -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {list.map((item, index) => {
          return (
            <MapView.Marker
              testID="mapMarker"
              key={index}
              coordinate={{ latitude: item.lat, longitude: item.long }}
              title={index + 1 + ""}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
