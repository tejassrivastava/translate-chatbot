// export function callLogic(name){
//     return dispatch => {
//         setTimeout(()=>{
//             dispatch({
//                 type: "SET_NAME",
//                 payload: name
//             });
//         },2000);
//     }
// }
export function AddTab(tab) {
  return {
    type: "ADD_TAB",
    payload: tab
  };
}

export function SelectTab(id) {
  return {
    type: "SEL_TAB",
    payload: id
  };
}

export function DeleteTab(id) {
  return {
    type: "DEL_TAB",
    payload: id
  };
}
