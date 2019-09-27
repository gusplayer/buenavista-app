import React, { Component } from "react";
import { AsyncStorage, Alert } from "react-native";
import Auth from "./navigation/Auth";
import { Provider } from "react-redux";
import createStore from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  CheckPermission,
  CreateChannel,
  notificationOpenBackListener
} from "./src/PushNotifications";
import firebase from "react-native-firebase";
import type { Notification, NotificationOpen } from "react-native-firebase";

//console.disableYellowBox = true;
export default class App extends Component {
  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners();
    const notificationOpen: NotificationOpen = await firebase
      .notifications()
      .getInitialNotification(); //add this line
    //   if (notificationOpen) {
    //     const action = notificationOpen.action;
    //     const notification: Notification = notificationOpen.notification;
    //     var seen = [];
    //     alert(
    //       JSON.stringify(notification.data, function(key, val) {
    //         if (val != null && typeof val == "object") {
    //           if (seen.indexOf(val) >= 0) {
    //             return;
    //           }
    //           seen.push(val);
    //         }
    //         return val;
    //       })
    //     );
    //   }
    //   this.notificationOpenedListener = firebase
    //     .notifications()
    //     .onNotificationOpened((notificationOpen: NotificationOpen) => {
    //       // Get the action triggered by the notification being opened
    //       const action = notificationOpen.action;
    //       // Get information about the notification that was opened
    //       const notification: Notification = notificationOpen.notification;
    //       var seen = [];
    //       alert(
    //         JSON.stringify(notification.data, function(key, val) {
    //           if (val != null && typeof val == "object") {
    //             if (seen.indexOf(val) >= 0) {
    //               return;
    //             }
    //             seen.push(val);
    //           }
    //           return val;
    //         })
    //       );
    //       firebase
    //         .notifications()
    //         .removeDeliveredNotification(notification.notificationId);
    //     });
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem("fcmToken", fcmToken);
      }
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log("permission rejected");
    }
  }

  ////////////////////// Add these methods //////////////////////

  //Remove listeners allocated in createNotificationListeners()
  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }

  async createNotificationListeners() {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body } = notification;
        this.showAlert(title, body);
        console.warn("foregroun");
      });

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        // this.showAlert(title, body);
        // console.warn("background");
        // console.warn(notificationOpen);
      });

    // this.notificationOpenedListener = firebase
    //   .notifications()
    //   .onNotificationOpened((notificationOpen: NotificationOpen) => {
    //     // Get the action triggered by the notification being opened
    //     console.warn(notificationOpen);
    //     const action = notificationOpen.action;
    //     // Get information about the notification that was opened
    //     const notification: Notification = notificationOpen.notification;
    //     var seen = [];
    //     alert(
    //       JSON.stringify(notificationOpen, function(key, val) {
    //         if (val != null && typeof val === "object") {
    //           if (seen.indexOf(val) >= 0) {
    //             return;
    //           }
    //           seen.push(val);
    //         }
    //         return val;
    //       })
    //     );
    //   });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      // this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  // const notificationOpenedListener = () =>
  // firebase.notifications().onNotificationOpened(notificationOpen => {
  // });

  showAlert(title, body) {
    Alert.alert(
      title,
      body,
      [{ text: "Continuar", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  /////////////

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
