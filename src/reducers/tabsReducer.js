const tabsReducer = (
  state = {
    tabs: [
      {
        id: 1,
        name: "Tab 1",
        code: ` async function respond(inputText){
            const res = await global.translates(inputText,"en","hi");  
                  
            return res;
          }
          respond(inputText);`
      }
    ],
    currentTab: {
      id: 1,
      name: "Tab 1",
      code: `async function respond(inputText){
        
        const res = await global.translates(inputText,"en","hi");  
          
        return res;
      }
      respond(inputText);`
    },
    key: 1
  },
  action
) => {
  switch (action.type) {
    case "ADD_TAB":
      state = {
        ...state,
        tabs: [...state.tabs, action.payload]
      };

      break;
    case "SEL_TAB":
      state = {
        ...state,

        key: action.payload,
        currentTab: state.tabs.filter(item => item.id == action.payload)[0]
      };

      break;
    case "DEL_TAB":
      state = {
        ...state,
        tabs: state.tabs.filter(item => item.id != action.payload)
      };

      break;
    case "CODE_CHANGE":
      state = {
        ...state,
        currentTab: {
          ...state.currentTab,
          code: action.payload
        }
      };

      let tabs = [...state.tabs];

      let tab = [...tabs.filter(item => item.id == state.currentTab.id)][0];

      tab.code = action.payload;

      tabs[tabs.findIndex(obj => obj.id === state.currentTab.id)] = tab;

      break;
  }
  return state;
};
export default tabsReducer;
