import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Buton from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
      <div className="TeamPhoto">
        <img
          src="./assets/Team.jpeg"
          alt="Team Photo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(70%)',
          }}
        />
        <div className='TeamPhotoText'>
          <h1>Empowering Students</h1>
          <h1 className="SecondTeamText">Building Community</h1>
        </div>
      </div>

      <Container fluid>
        <Row className='HomeRow'>
          <Col className='leftDiv'>
            <h1 className='FS'>Students in Finance and Philosophy</h1>
            <p>The T12 Initiative gives current students financial literacy and the opportunity to analyze investments as a team</p>
            <p>T12’s goal is to provide valuable experience, and in partnership with universities in San Diego, fund scholarships for incoming students.</p>
            <Buton className='GiveToday'>Give Today</Buton>
          </Col>
          <Col>
          </Col>
        </Row>

        <Row className='HomeRow'>
          <Col className='HomeRightDiv'>
            <img src='./assets/Problem.png'></img>
            <h1>The Problem</h1>
            <h2>Lack of access, support, or resources</h2>
          </Col>
          <Col className='HomeLeftDiv'>
            <img src='./assets/Lightbulb.png'></img>
            <h1>The Opportunity</h1>
            <h2>Support, resources, and access can be given by those who care</h2>
          </Col>
        </Row>
      </Container>

      <div className='Motivational'>
        <h2>Join us in building community and empowering students...</h2>
        <h2>...Because together we can inspire the leaders of tomorrow</h2>
      </div>
    </div>
  );
}
