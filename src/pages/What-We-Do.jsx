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
            <p>The T12 Initiative is a nonprofit organization funding scholarships in the amount of 7% of our total fund yearly for incoming students at the University of San Diego and UC San Diego.</p>
            <p>Through donations to our initiative, we provide students the aid that they need to pursue their goals in higher education.</p>
            <p>We also give students with experience in finance the opportunity to work as a team to manage and conduct analysis on donated assets and continue to develop the skills that will aid them in their academics and careers.</p>
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
            <p>In partnership with the University of San Diego and UC San Diego, we pledge to donate 7% of our capital to fund scholarships each year.</p>
          </div>
        </Col>
      </Row>

      <div className='HorizontalLine'></div>

      <Row className="Investing">
        <Col xs={12} md={6}>
          <div className="leftDiv">
            <h1>Investing</h1>
            <p>Our investment team is composed of current finance students interested in asset management and other fields of finance and is advised by professors of finance and industry professionals.</p>
            <p>The team presents ideas, market and financial analysis, and pitches that they believe will have future upside and see growth.</p>
            <p>Taking donations in the form of cash or publicly traded securities, students analyze the companies whose stock is donated and make predictions about the future growth of the stock.</p>
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
            <p>T12 is advised by professors and professionals. With the guidance of industry veterans, ....</p>
          </div>
        </Col>
      </Row>

      <div className='HorizontalLine'></div>

      <Row className="HowItWorks">
        <Col xs={12} md={6}>
          <div className="leftDiv">
            <h1>How It Works</h1>
            <p>As a 501(c)(3), gifts to the T12 Initiative provide tax incentives for our donors. Internally, through a DAF, we have the opportunity to analyze and grow assets before gifting back to university scholarships.</p>
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
