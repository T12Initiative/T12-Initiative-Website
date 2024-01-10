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
          <Col className='leftDiv' xs={12} md={6}>
            <h1 className='FS'>Students in Finance and Philosophy</h1>
            <p>The T12 Initiative gives current students literacy in financial markets and the opportunity to analyze investments and grow a portfolio as a team</p>
            <p>T12’s goal is to provide valuable experience, and in partnership with universities in San Diego, fund merit-based scholarships for incoming students.</p>
            <Buton className='GiveToday'>Give Today</Buton>
          </Col>
          <Col xs={12} md={6}>
          </Col>
        </Row>

        <div className='HorizontalLine'></div>

        <Row className='HomeRow2'>
          <Col className='HomeRightDiv' xs={12} md={6}>
            <img src='./assets/Problem.png'></img>
            <h1>The Problem</h1>
            <h2>Lack of access, support, or resources</h2>
          </Col>
          <Col className='HomeLeftDiv' xs={12} md={6}>
            <img src='./assets/Lightbulb.png'></img>
            <h1>The Opportunity</h1>
            <h2>Support, resources, and access can be given by those who care</h2>
          </Col>
        </Row>

        <Row className='HomeRow2'>
          <Col className='HomeRightDiv' xs={12} md={6}>
            <img src='./assets/Keys.png'></img>
            <h1>Our Approach</h1>
            <h2>Provide care, opportunity, and community to current and incoming students</h2>
          </Col>
          <Col className='HomeLeftDiv' xs={12} md={6}>
            <img src='./assets/Leadership.png'></img>
            <h1>The Work</h1>
            <h2>We educate students about finance and working with a team,</h2>
            <h2>While supporting those who will soon join us in university with scholarships to fund their</h2>
          </Col>
        </Row>
      </Container>

      <div className='HorizontalLine'></div>

      <div className='Motivational'>
        <h2 className='MotivationalRight'>Join us in building community and empowering students...</h2>
        <h2 className='MotivationalLeft'>...Because together we can inspire the leaders of tomorrow</h2>
      </div>
    </div>
  );
}
