export function callLogic(msg) {
  return {
    type: "CALL_LOGIC",
    payload: msg
  };
}
