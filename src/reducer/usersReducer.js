export const usersReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      console.log(action);
      return action.payload;

    default:
      return state;
  }
};
