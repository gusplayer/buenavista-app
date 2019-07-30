import React, { Component } from "react";
import Auth from "./navigation/Auth";
import { Provider } from "react-redux";
import createStore from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default class App extends Component {
  render() {
    const { store, persistor } = createStore();

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Auth />
        </PersistGate>
      </Provider>
    );
  }
}
