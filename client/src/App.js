import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchKnowledgeMap } from "./actions/knowledgeMap";
import { fetchContent } from "./actions/content";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchKnowledgeMap();
    this.props.fetchContent();
  }

  render() {
    return (
      <div className="App">
        <textarea
          readOnly
          style={{ width: "50%" }}
          rows={50}
          value={JSON.stringify(this.props.knowledgeMap, null, 4)}
        />
      </div>
    );
  }
}

function mapStateToProps({ knowledgeMap }) {
  return { knowledgeMap };
}

const mapDispatchToProps = {
  fetchKnowledgeMap,
  fetchContent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
