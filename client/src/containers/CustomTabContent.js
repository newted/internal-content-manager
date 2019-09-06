import React from "react";
// Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import CreateForms from "./CreateForms";
// Styling
import styles from "./CustomTabContent.module.css";

const CustomTabContent = ({ model }) => (
  <div className={styles.customTabContent}>
    <TabContainer id="models-left-tab-nav" defaultActiveKey="create">
      <Row style={{ minHeight: "500px", marginRight: "0px" }}>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="create">Create</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fetch">Fetch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="update">Update</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="delete">Delete</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className={styles.tabPane}>
          <TabContent>
            <TabPane eventKey="create">
              <CreateForms model={model} />
            </TabPane>
            <TabPane eventKey="fetch">Fetch...</TabPane>
            <TabPane eventKey="update">Update...</TabPane>
            <TabPane eventKey="delete">Delete...</TabPane>
          </TabContent>
        </Col>
      </Row>
    </TabContainer>
  </div>
);

export default CustomTabContent;
