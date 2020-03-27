import React, { Component } from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";
import { connect } from "react-redux";
import CodeChange from "../../actions/codeActions";
class CodeEditor extends Component {
  constructor(props) {
    super(props);
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }
  onChange = (newValue, e) => {
    this.props.CodeChange(newValue);
  };

  render() {
    const options = {
      selectOnLineNumbers: true,
      languages: ["javascript"],
      features: [
        "accessibilityHelp",
        "bracketMatching",
        "caretOperations",
        "clipboard",
        "codeAction",
        "codelens",
        "colorDetector",
        "comment",
        "contextmenu",
        "coreCommands",
        "cursorUndo",
        "dnd",
        "find",
        "folding",
        "fontZoom",
        "format",
        "gotoError",
        "gotoLine",
        "gotoSymbol",
        "hover",
        "iPadShowKeyboard",
        "inPlaceReplace",
        "inspectTokens",
        "linesOperations",
        "links",
        "multicursor",
        "parameterHints",
        "quickCommand",
        "quickOutline",
        "referenceSearch",
        "rename",
        "smartSelect",
        "snippets",
        "suggest",
        "toggleHighContrast",
        "toggleTabFocusMode",
        "transpose",
        "wordHighlighter",
        "wordOperations",
        "wordPartOperations"
      ]
    };
    return (
      <>
        <MonacoEditor
          width="760"
          height="500"
          language="javascript"
          theme="vs-dark"
          value={this.props.tabsData.currentTab?.code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </>
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
    CodeChange: code => {
      dispatch(CodeChange(code));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
