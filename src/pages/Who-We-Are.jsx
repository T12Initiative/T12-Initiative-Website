import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WhoWeAre() {
  return (
    <Container className='WhoWeAre' fluid>
      <h1 className='OurTeam'>Our Team</h1>
      <Row>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          <img src="./assets/TaiHeadshot.jpeg" alt="Tai Takahashi Headshot" />
          <h1>Tai Takahashi</h1>
          <h2>President & Founder</h2>
          <h3>View Bio</h3>
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          <img src="./assets/DavidHeadshot.jpg" alt="David Montoto Headshot" />
          <h1>David Montoto</h1>
          <h2>Board of Directors</h2>
          <h3>View Bio</h3>
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          <img src="./assets/MattHeadshot.jpeg" alt="Matthew Kim Headshot" />
          <h1>Matthew Kim</h1>
          <h2>Board of Directors</h2>
          <h3>View Bio</h3>
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          <img src="./assets/BellaHeadshot.jpeg" alt="Bella Bolough Headshot" />
          <h1>Bella Bolough</h1>
          <h2>Board of Directors</h2>
          <h3>View Bio</h3>
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          <img src="./assets/BellaHeadshot.jpeg" alt="Roxane Cayrat Headshot" />
          <h1>Roxane Cayrat</h1>
          <h2>Board of Directors</h2>
          <h3>View Bio</h3>
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          <img src="./assets/BellaHeadshot.jpeg" alt="Victor Devillaire Headshot" />
          <h1>Victor Devillaire</h1>
          <h2>Board of Directors</h2>
          <h3>View Bio</h3>
        </Col>
      </Row>
      <div className='Bio'>
        <h1>Tai Takahashi</h1>
        <h2>President, Founder & Chairman</h2>
        <Row>
          
        </Row>
      </div>
    </Container>
  );
}
