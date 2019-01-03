import React, { Component } from "react";
import Auth from "./navigation/Auth";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./redux/store/store";
// import Loading from "./src/components/loading";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
  }
}
