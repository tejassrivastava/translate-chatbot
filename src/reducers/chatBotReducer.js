const chatBotReducer = (
  state = {
    msg: ""
  },
  action
) => {
  switch (action.type) {
    case "CALL_LOGIC":
      state = {
        ...state,
        msg: action.payload
      };
      break;
  }
  return state;
};
export default chatBotReducer;
