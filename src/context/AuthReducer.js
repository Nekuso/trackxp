const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      // localStorage.clear();
      return {
        currentUser: null,
      };
    }
    case "UPDATE_USER":
      return {
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
