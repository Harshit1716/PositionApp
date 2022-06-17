import * as React from "react";
import { Provider } from "react-redux";
import { cleanup, fireEvent, render } from "@testing-library/react-native";

import { configureStore } from "@reduxjs/toolkit";
import LocationScreen from "../src/screens/LocationScreen";
import { store } from "../src/redux/store";
import { useAppDispatch } from "../src/redux/ReduxHooks";

describe("Store Basic setup test", () => {
  test("main view is renderd with store ", () => {
    let state = store.getState().user;
    expect(state.length).toEqual(1);
    const component = (
      <Provider store={store}>
        <LocationScreen />
      </Provider>
    );

    expect(component).toBeDefined();
  });
});
