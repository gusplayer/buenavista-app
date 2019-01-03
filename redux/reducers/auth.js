const defaultState = {
    auth: false,
    token: ""
  };
  
  export default function reducer(state = defaultState, action) {
    switch (action.type) {
      case "LOGIN":
        return Object.assign({}, state, {
          auth: true,
          token: action.token
        });
      case "LOGOUT":
        return Object.assign({}, state, {
          auth: false,
          token: ""
        });
      default:
        return state;
    }
  }
  