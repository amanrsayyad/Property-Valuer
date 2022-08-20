import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  //header logic
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  //Dropdown logic
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const showDropdown1 = (e) => {
    setShow1(!show);
  };
  const hideDropdown1 = (e) => {
    setShow1(false);
  };

  //dropdown css inline
  const myStyle = {
    fontSize: '17px',
    color: '#000',
    zIndex: '1000000',
    textDecoration: 'none',
  };

  return (
    <div className='header'>
      <div className='header_left'>
        <h2>Logo</h2>
      </div>
      <div className='header_right'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link to='/' onClick={closeMobileMenu}>Lenders Engineering Services</Link>
          <Link to='/'>
            <NavDropdown
              title='Industry Solutions'
              id='nav-dropdown-dark-example'
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              className='newDrop'
            >
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Banking & Finance
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Construction & Infrastructure
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Valution under Tax Laws
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Engineering & Manufacturing
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Legal
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Public & Private Firms
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Individuals
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Link>
          <Link to='/'>
            <NavDropdown
              title='Valuation Services'
              id='nav-dropdown-dark-example'
              show={show1}
              onMouseEnter={showDropdown1}
              onMouseLeave={hideDropdown1}
              className='newDrop'
            >
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown1}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Property Valuation Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown1}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Corporate Valuation Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown1}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Specialized Asset Valuation Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown1}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Litigation and Arbitration Support Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className='drop_link_click'
                onClick={hideDropdown1}
              >
                <Link to='/' onClick={closeMobileMenu} style={myStyle}>
                  Valuation under Tax Laws
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Link>
          <Link to='/' onClick={closeMobileMenu}>TEV/Feasibility Study</Link>
          <Link to='/' onClick={closeMobileMenu} className='drop_flex'>
            Advisory Services
          </Link>
          <br />
          <Link to='/' onClick={closeMobileMenu}>Detailed Project Report Services</Link>
          <Link to='/' onClick={closeMobileMenu}>Contact us</Link>
        </ul>
        <div className='menu_icons' onClick={handleClick}>
          <i className={click ? 'fas fa-times x-icon' : 'fas fa-bars'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
