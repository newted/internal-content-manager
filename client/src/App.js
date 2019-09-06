import React, { Component } from "react";
// Components
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CustomTabContent from "./containers/CustomTabContent";
// Styling
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Tabs defaultActiveKey="source" id="main-content-manager-tabs">
          <Tab eventKey="content" title="Content">
            <CustomTabContent model="content" />
          </Tab>
          <Tab eventKey="content-series" title="Content Series">
            <CustomTabContent model="content-series" />
          </Tab>
          <Tab eventKey="content-creator" title="Content Creator">
            <CustomTabContent model="content-creator" />
          </Tab>
          <Tab eventKey="source" title="Source">
            <CustomTabContent model="source" />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default App;
