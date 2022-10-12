// initial state
const initialState = {
  userDetails: {},
};
// reducer function
const displayUserProfile = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_USER":
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};
export default displayUserProfile;
