import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchKnowledgeMap } from "./actions/knowledgeMap";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchKnowledgeMap();
  }

  render() {
    return <div className="App">App</div>;
  }
}

function mapStateToProps({ knowledgeMap }) {
  return { knowledgeMap };
}

const mapDispatchToProps = { fetchKnowledgeMap };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
