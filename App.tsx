import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Provider } from "react-redux";
import LocationScreen from "./src/screens/LocationScreen";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <LocationScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
