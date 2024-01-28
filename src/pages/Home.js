import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "../../src/pages/Home.css";


function Home() {
  return (

    <div>
      <h1>Home page of chat app made by roshni giri from everest </h1>
    </div>
    // <Row>
    //   <Col
    //     md={6}
    //     className="d-flex flex-direction-column align-items-center justify-content-center"
    //   >
    //     <div className="home_bg">
    //       <h1>Share the world with your friends</h1>
    //       <p>Chat App lets you connect with the world</p>
    //       <LinkContainer>
    //         <Button variant="success">
    //           Get Started
    //           <i className="fas fa-comments home-message-icon"></i>
    //         </Button>
    //       </LinkContainer>
    //     </div>
    //     <Col md={6} className="home_bg"></Col>
    //   </Col>
    // </Row>
  );
}

export default Home;
