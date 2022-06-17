/* istanbul ignore file */

import * as React from "react";
import { Provider } from "react-redux";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { configureStore } from "@reduxjs/toolkit";
import LocationScreen from "../src/screens/LocationScreen";
import { store } from "../src/redux/store";
import { useAppDispatch } from "../src/redux/ReduxHooks";
import * as Location from "expo-location";

describe("LocationScreen Test", () => {
  test("initial Render Test", () => {
    let state = store.getState().user;
    expect(state.length).toEqual(1);
    const component = (
      <Provider store={store}>
        <LocationScreen />
      </Provider>
    );

    const tree = render(component);
    const item = tree.getByTestId("LocationScreen");
    expect(item).toBeDefined();
  });
});
