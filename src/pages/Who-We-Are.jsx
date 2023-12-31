import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function WhoWeAre() {
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);

  const handleLinkedInHover = () => {
    setIsLinkedInHovered(true);
  };

  const handleLinkedInLeave = () => {
    setIsLinkedInHovered(false);
  };

  const handleInstagramHover = () => {
    setIsInstagramHovered(true);
  };

  const handleInstagramLeave = () => {
    setIsInstagramHovered(false);
  };

  const contactSectionStyle = {
    animationName: 'slideInDown',
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in',
    animationDelay: '1.2s',
    animationIterationCount: '1',
    animationDirection: 'normal',
    animationFillMode: 'backwards',
    marginTop: '15px',
    display: 'flex',
    alignItems: 'left',
    paddingLeft: '13%',
  };

  const imageStyle = {
    width: '30px',
    height: '30px',
    marginRight: '20px',
    transition: 'transform 0.3s ease-in-out, filter 0.3s ease', 
    color: 'var(--main-blue)',
  };

  const imageHoverStyle = {
    filter: 'brightness(1.5)',
    transform: 'translateY(-10px)',
  };

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

      <div className='HorizontalLine'></div>

      <div className='Bio'>
        <h1>Tai Takahashi</h1>
        <h2>President, Founder & Chairman</h2>
        <Row>
          <Col className='LeftBio' lg={4} xs={12}>
            <img src="./assets/TaiHeadshot.jpeg" alt="Tai Takahashi Headshot" />
            <h3>test@gmail.com</h3>
            <div style={contactSectionStyle}>
              <a href="https://www.linkedin.com/in/david-montoto" target="_blank" rel="noreferrer" onMouseEnter={handleLinkedInHover} onMouseLeave={handleLinkedInLeave}>
                <img src="./assets/T12Linked.png" alt="LinkedIn" style={{
                  ...imageStyle,
                  ...(isLinkedInHovered && imageHoverStyle),
                }}/>
              </a>
              <a href="https://www.instagram.com/david_montoto/" target="_blank" rel="noreferrer" onMouseEnter={handleInstagramHover} onMouseLeave={handleInstagramLeave}>
                <img src="./assets/T12Instagram.png" alt="Instagram" style={{
                  ...imageStyle,
                  ...(isInstagramHovered && imageHoverStyle),
                }}/>
              </a>
            </div>
          </Col>
          <Col lg={8} xs={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>
      </div>

      <div className='HorizontalLine'></div>

      <div className='Bio'>
        <h1>David Montoto</h1>
        <h2>Board of Directors</h2>
        <Row>
          <Col className='LeftBio' lg={4} xs={12}>
            <img src="./assets/DavidHeadshot.jpg" alt="Tai Takahashi Headshot" />
            <h3>test@gmail.com</h3>
            <div style={contactSectionStyle}>
              <a href="https://www.linkedin.com/in/david-montoto" target="_blank" rel="noreferrer" onMouseEnter={handleLinkedInHover} onMouseLeave={handleLinkedInLeave}>
                <img src="./assets/T12Linked.png" alt="LinkedIn" style={{
                  ...imageStyle,
                  ...(isLinkedInHovered && imageHoverStyle),
                }}/>
              </a>
              <a href="https://www.instagram.com/david_montoto/" target="_blank" rel="noreferrer" onMouseEnter={handleInstagramHover} onMouseLeave={handleInstagramLeave}>
                <img src="./assets/T12Instagram.png" alt="Instagram" style={{
                  ...imageStyle,
                  ...(isInstagramHovered && imageHoverStyle),
                }}/>
              </a>
            </div>
          </Col>
          <Col lg={8} xs={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>
      </div>

      <div className='HorizontalLine'></div>

    </Container>
  );
}
