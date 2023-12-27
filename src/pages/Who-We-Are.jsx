import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WhoWeAre() {
  return (
    <Container className='WhoWeAre' fluid>
      <Row>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          <h1>Tai Takahashi</h1>
          <h2>President & Founder</h2>
          <h3>View Bio</h3>
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          {/* Card 2 content */}
          <h1>David Montoto</h1>
          {/* Image, name, etc. */}
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          {/* Card 3 content */}
          <h1>Matthew Kim</h1>
          {/* Image, name, etc. */}
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          {/* Card 4 content */}
          <h1>Bella Bolough</h1>
          {/* Image, name, etc. */}
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          {/* Card 5 content */}
          <h1>Roxane Cayrat</h1>
          {/* Image, name, etc. */}
        </Col>
        <Col className='Profiles' lg={4} md={6} xs={12}>
          {/* Card 6 content */}
          <h1>Victor Devillaire</h1>
          {/* Image, name, etc. */}
        </Col>
      </Row>
    </Container>
  );
}
