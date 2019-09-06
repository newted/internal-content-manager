import React, { Component } from "react";
// Components
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// Styling
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Tabs defaultActiveKey="content" id="main-content-manager-tabs">
          <Tab eventKey="content" title="Content">
            Content stuff
          </Tab>
          <Tab eventKey="content-series" title="Content Series">
            Content series stuff
          </Tab>
          <Tab eventKey="content-creator" title="Content Creator">
            Content creator stuff
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default App;
