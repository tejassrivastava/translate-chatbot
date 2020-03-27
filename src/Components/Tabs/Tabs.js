import React, { Component, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./Tabs.css";
import { connect } from "react-redux";
import { AddTab, SelectTab, DeleteTab } from "../../actions/tabsActions";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
class CustomTabs extends Component {
  constructor(props) {
    super(props);
  }

  handleAddTab = () => {
    const newTabObject = {
      id: this.props.tabsData.tabs.length + 1,
      name: `Tab ${this.props.tabsData.tabs.length + 1}`,
      code: "//Start Writing Your Code"
    };
    this.props.AddTab(newTabObject);
  };

  handleDeleteTab = id => {
    if (id === 1) {
      return false;
    }
    this.props.DeleteTab(id);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Tabs
              id="cuTab"
              activeKey={this.props.tabsData.key}
              onSelect={k => {
                this.props.SelectTab(k);
              }}
            >
              {this.props.tabsData.tabs.map((tab, i) => (
                <Tab
                  key={i}
                  eventKey={tab.id}
                  title={
                    <div>
                      {tab.name} &nbsp;{" "}
                      <i
                        onClick={() => this.handleDeleteTab(tab.id)}
                        className="fa fa-times"
                      ></i>
                    </div>
                  }
                ></Tab>
              ))}

              <Tab
                title={
                  <i onClick={this.handleAddTab} className="fa fa-plus"></i>
                }
              ></Tab>
            </Tabs>

            <Button className="mybtn" variant="outline-light" size="sm">
              {/* <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> */}
              Apply Changes
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tabsData: state.tabsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddTab: tab => {
      dispatch(AddTab(tab));
    },
    SelectTab: id => {
      dispatch(SelectTab(id));
    },
    DeleteTab: id => {
      dispatch(DeleteTab(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabs);
