import { useState } from 'react';

function Footer() {
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
      marginBottom: '50px',
      marginTop: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const imageStyle = {
      width: '50px',
      height: '50px',
      marginRight: '20px',
      transition: 'transform 0.3s ease-in-out, filter 0.3s ease', 
      color: 'var(--main-blue)',
    };
  
    const imageHoverStyle = {
      filter: 'brightness(1.5)',
      transform: 'translateY(-10px)',
    };
  
    return (
        <div className="footerBox">
          <h1>T12 Initiative</h1>
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
        </div>
    );
  }
  
  export default Footer;
  