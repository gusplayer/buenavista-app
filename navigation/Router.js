import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "../screens/Login";
import Terms from "../screens/Terms";
import HotelList from "../screens/HotelList";
import HotelDetails from "../screens/HotelDetails";
import Profile from "../screens/Profile";
import Filter from "../screens/Filter";
import Benefits from "../screens/Benefits";
import CouponUsed from "../screens/CouponUsed";
import CouponAvalible from "../screens/CouponAvalible";
import Booking from "../screens/Booking";

export const LoginNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Terms: {
      screen: Terms,
      navigationOptions: {
        header: null
      }
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
      navigationOptions: {
        header: null
      }
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
    }
  },
  {
    initialRouteName: "Login"
  }
);
// export const DashNavigator = StackNavigator(
//   {
//     Dash: {
//       screen: Dashboard,
//       navigationOptions: {
//         header: null
//       }
//     },
//     ListProductSales: {
//       screen: ListProductSales,
//       navigationOptions: { title: "Detalles de la venta", header: null }
//     },
//     Helpdesk: {
//       screen: Helpdesk,
//       navigationOptions: { title: "Ayuda" }
//     },
//     Settings: {
//       screen: Settings,
//       navigationOptions: { title: "Ajustes de la cuenta" }
//     },
//     Soon: {
//       screen: Soon,
//       navigationOptions: { title: "Volver al menú" }
//     }
//   },
//   {
//     initialRouteName: "Dash"
//   }
// );
