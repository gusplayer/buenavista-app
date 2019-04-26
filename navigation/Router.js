import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "../screens/Login";
import ForgetPass from "../screens/ForgetPass";
import Register from "../screens/Register";
import Terms from "../screens/Terms";
import HotelList from "../screens/HotelList";
import HotelDetails from "../screens/HotelDetails";
import Profile from "../screens/Profile";
import Filter from "../screens/Filter";
import Benefits from "../screens/Benefits";
import CouponUsed from "../screens/CouponUsed";
import CouponAvalible from "../screens/CouponAvalible";
import Booking from "../screens/Booking";
import Notification from "../screens/Notification";
import Membership from "../screens/Membership";
import CouponsView from "../screens/CouponsView";
import ChangePassword from "../screens/ChangePassword";
import Logout from "../screens/Logout";

export const LoginNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    ForgetPass: {
      screen: ForgetPass,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    },
    Terms: {
      screen: Terms,
      navigationOptions: { title: "Terminos y condiciones" }
    }
  },
  {
    initialRouteName: "Login"
  }
);
export const DashNavigator = StackNavigator(
  {
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        header: null
      }
    },
    Terms: {
      screen: Terms,
      navigationOptions: { title: "Terminos y condiciones" }
    },
    HotelList: {
      screen: HotelList,
      navigationOptions: {
        header: null
      }
    },
    HotelDetails: {
      screen: HotelDetails,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null
      }
    },
    Filter: {
      screen: Filter,
      navigationOptions: { title: "Filtrar" }
    },
    Benefits: {
      screen: Benefits,
      navigationOptions: {
        header: null
      }
    },
    CouponUsed: {
      screen: CouponUsed,
      navigationOptions: {
        header: null
      }
    },
    CouponAvalible: {
      screen: CouponAvalible,
      navigationOptions: {
        header: null
      }
    },
    Booking: {
      screen: Booking,
      navigationOptions: {
        header: null
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        header: null
      }
    },
    Membership: {
      screen: Membership,
      navigationOptions: {
        header: null
      }
    },
    CouponsView: {
      screen: CouponsView,
      navigationOptions: {
        header: null
      }
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "HotelList"
  }
);
