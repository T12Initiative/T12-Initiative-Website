import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WhatWeDo() {
  return (
    <Container fluid>
      <Row className="OurMission">
        <Col xs={12} md={6}>
          <div className="leftDiv">
            <h1>Our Mission</h1>
            <p>
              {/* Your content here */}
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} style={{ padding: '0' }}>
          <div className="rightDiv">
            <img src="./assets/OurMissionImage.jpg" alt="Our Mission" />
          </div>
        </Col>
      </Row>

      <div className='HorizontalLine'></div>

      <Row className="Philanthropy">
        <Col xs={12} md={6} style={{ padding: '0' }}>
          <div className="leftDiv">
            <img src="./assets/PhilanthropyImage.jpeg" alt="Philanthropy" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="rightDiv">
            <h1>Philanthropy</h1>
            <p>
              {/* Your content here */}
            </p>
          </div>
        </Col>
      </Row>

      <div className='HorizontalLine'></div>

      <Row className="Investing">
        <Col xs={12} md={6}>
          <div className="leftDiv">
            <h1>Investing</h1>
            <p>
              {/* Your content here */}
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} style={{ padding: '0' }}>
          <div className="rightDiv">
            <img src="./assets/InvestingImage.jpeg" alt="Investing" />
          </div>
        </Col>
      </Row>

      <div className='HorizontalLine'></div>

      <Row className="RiskManagement">
        <Col xs={12} md={6} style={{ padding: '0' }}>
          <div className="leftDiv">
            <img src="./assets/RiskManagementImage.jpg" alt="Risk Management" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="rightDiv">
            <h1>Risk Management</h1>
            <p>
              {/* Your content here */}
            </p>
          </div>
        </Col>
      </Row>

      <div className='HorizontalLine'></div>

      <Row className="HowItWorks">
        <Col xs={12} md={6}>
          <div className="leftDiv">
            <h1>How It Works</h1>
            <p>
              {/* Your content here */}
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} style={{ padding: '0' }}>
          <div className="rightDiv">
            <img src="./assets/HowItWorksImage.jpg" alt="How It Works" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
