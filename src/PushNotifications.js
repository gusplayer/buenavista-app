const getToken = async () => {
  let fcmToken = await AsyncStorage.getItem("fcmToken");
  if (!fcmToken) {
    fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      await AsyncStorage.setItem("fcmToken", fcmToken);
    }
  }
};

const requestPermission = async () =>
  firebase
    .messaging()
    .requestPermission()
    .then(() => {
      getToken();
    })
    .catch(error => {
      console.warn(`${error} permission rejected`);
    });

export const checkPermission = async () => {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    getToken();
  } else {
    requestPermission();
  }
};

export const notificationOpenBackListener = async () => {
  const { dispatch, isLoggedIn } = props;
  const notificationOpen = await firebase
    .notifications()
    .getInitialNotification();
  if (notificationOpen) {
    // Agregar el codigo que se considere necesario
  }
};

export const createChannel = () => {
  const channel = new firebase.notifications.Android.Channel(
    CHANNEL_NOTIFICATIONS.CHANNEL_ID,
    CHANNEL_NOTIFICATIONS.CHANNEL_NAME,
    firebase.notifications.Android.Importance.Max
  ).setDescription(CHANNEL_NOTIFICATIONS.CHANNEL_DESCRIPTION);
  firebase.notifications().android.createChannel(channel);
};

const notificationOpenedListener = () =>
  firebase.notifications().onNotificationOpened(notificationOpen => {
    // Agregar el codigo que se considere necesario
  });
