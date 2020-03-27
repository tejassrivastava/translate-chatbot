import React, { Component } from "react";

import CodeEditor from "../CodeEditor/CodeEditor";
import ChatBot from "../ChatBot/ChatBot";
import { connect } from "react-redux";
import "./Workspace.css";
import CustomTabs from "../Tabs/Tabs";
import axios from "axios";

const vm = require("vm");

let ck12 = {};
ck12.val = 0;
global.translates = async (i, f, t) => {
  const res = await axios({
    method: "get",
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate`,
    params: {
      key:
        "trnsl.1.1.20200326T192911Z.b69a94e545e49c8a.e6cc2a6f7f0eed242d116d3bbb53c6927a62d174",
      text: i,
      lang: f + "-" + t,
      format: "plain"
    }
  });

  const data = res;

  return data.data.text[0];
};
class Workspace extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    msgBot: ""
  };

  executeLogic = async msg => {
    let a = this.props.codemsg.tabs[0].code;

    const code = a;
    const sandbox = {
      global: global,
      inputText: msg,
      translate(msg, from, to) {
        global.globalVar = {
          msg: msg,
          from: from,
          to: to
        };
      }
    };

    vm.createContext(sandbox);
    let r = await vm.runInNewContext(code, sandbox);

    this.setState({
      msgBot: {
        type: "in",
        msg: r,
        img:
          "https://cdn3.iconfinder.com/data/icons/chat-bot-emoji-blue-filled-color/300/14134081Untitled-3-512.png"
      }
    });
  };

  render() {
    return (
      <div>
        <div class="d-md-flex h-md-100 align-items-center workspace">
          <div class="col-md-6 p-0 h-md-100 left_pane">
            <CustomTabs></CustomTabs>
            <CodeEditor></CodeEditor>
          </div>

          <div class="col-md-6 p-0 h-md-100">
            <div class="container right_pane">
              <ChatBot
                executeLogic={this.executeLogic}
                responseBot={this.state.msgBot}
              ></ChatBot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    msg: state.chatBotReducer,
    codemsg: state.tabsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
