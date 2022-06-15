import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useAppSelector, useAppDispatch } from "../redux/ReduxHooks";
interface userState {
  location: string;
  long: number;
  lat: number;
  time: number;
}
import {
  deleteLocationByIndex,
  deleteAllLocation,
} from "../redux/UserLocationSlice";
const Home = () => {
  const list = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [, forceUpdate] = React.useReducer((x) => x + 1);

  return (
    <View testID="mainView" style={{ backgroundColor: "white", flex: 1 }}>
      <View>
        <TouchableOpacity
          testID="deleteAllTest"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            margin: 10,
            width: 100,
          }}
          onPress={() => {
            dispatch(deleteAllLocation());
            forceUpdate();
          }}
        >
          <Text>Delete All</Text>
        </TouchableOpacity>

        <Text
          testID="listScreenText"
          style={{
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          List Screen
        </Text>
        <FlatList
          testID="listView"
          data={list}
          renderItem={({ item, index }: { item: userState; index: number }) => {
            return (
              <TouchableOpacity
                testID="userLocationDetail"
                onPress={() => {
                  dispatch(deleteLocationByIndex(index));
                  forceUpdate();
                }}
                style={{
                  borderWidth: 1,
                  borderColor: "lightgray",
                  borderRadius: 10,
                  margin: 5,
                  padding: 5,
                  marginBottom:
                    index == 30 || index == list.length - 1 ? 100 : 0,
                }}
              >
                <Text style={{ margin: 5, fontSize: 18 }}>
                  User Location Detail{" "}
                </Text>
                <Text style={{ fontSize: 16, margin: 5 }}>
                  Location Name {index} :
                  <Text style={{ color: "blue" }}>{item.location}</Text>
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                  Location Time :
                  <Text style={{ color: "blue" }}>{item.time}</Text>
                </Text>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
};

export default Home;
