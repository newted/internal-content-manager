import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchKnowledgeSubjects } from "./actions/knowledgeSubject";
import { fetchContent } from "./actions/content";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchKnowledgeSubjects();
    this.props.fetchContent();
  }

  render() {
    return (
      <div className="App">
        <textarea
          readOnly
          style={{ width: "50%" }}
          rows={50}
          value={JSON.stringify(this.props.knowledgeSubjects, null, 4)}
        />
      </div>
    );
  }
}

function mapStateToProps({ knowledgeSubjects }) {
  return { knowledgeSubjects };
}

const mapDispatchToProps = {
  fetchKnowledgeSubjects,
  fetchContent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
