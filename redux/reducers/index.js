import { combineReducers } from "redux";
import auth from "./auth";

const rootReducer = combineReducers({
  auth
});

export default rootReducer;

// const INITIAL_STATE = {
//   auth: false,
//   token: null
// };

// const loginReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       const { data } = action;
//       return {
//         token
//       };
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   auth: loginReducer
// });
