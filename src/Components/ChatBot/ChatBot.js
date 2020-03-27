import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import { callLogic } from "../../actions/chatBotActions";
import "./ChatBot.css";
class ChatBot extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    msg: "",
    msgList: [
      {
        type: "in",
        msg: "Hi",
        img:
          "https://cdn3.iconfinder.com/data/icons/chat-bot-emoji-blue-filled-color/300/14134081Untitled-3-512.png"
      }
    ],
    visible: false
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ msgList: [...this.state.msgList, nextProps.responseBot] });
    this.setState({ visible: false });
  }
  msgBtnClick = () => {
    this.setState({ visible: true });
    let msg = {
      type: "out",
      msg: this.state.msg,
      img:
        "https://www.pngfind.com/pngs/m/292-2924858_user-icon-business-man-flat-png-transparent-png.png"
    };

    this.state.msgList.push(msg);

    let a = this.state.msg;
    this.props.executeLogic(a);
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body height3">
            <ul className="chat-list">
              {this.state.msgList.map((item, i) => (
                <li className={item.type}>
                  <div className="chat-img">
                    <img alt="Avtar" src={item.img} />
                  </div>
                  <div className="chat-body">
                    <div className="chat-message">
                      <p>{item.msg}</p>
                    </div>
                  </div>
                </li>
              ))}
              {this.state.visible === true && (
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </ul>
          </div>
        </div>

        <div className="card-input">
          <div className="card-input-body">
            <InputGroup>
              <FormControl
                onChange={e => {
                  this.setState({ msg: e.target.value });
                }}
                placeholder="Enter message here..."
                as="textarea"
                aria-label="With textarea"
              ></FormControl>
            </InputGroup>
            <Button className="a" onClick={this.msgBtnClick} variant="primary">
              Send
            </Button>
          </div>
        </div>

        {/* <input type="text" onChange={(e)=>{this.setState({msg:e.target.value})}}></input> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    msgList: state.chatBotReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    callLogic: msg => {
      dispatch(callLogic(msg));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBot);
