import React from "react";
import "react-native";
import Home from "../Pages/Home";
import renderer from "react-test-renderer";
import { AppProvider } from "../store";

test("Home snapShot", async () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(),
      })
    );
  });
  const snap = await renderer
    .create(
      <AppProvider>
        <Home />
      </AppProvider>
    )
    .toJSON();

  expect(snap).toMatchSnapshot();
});
