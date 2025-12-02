import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CTAButtons,
  Button
} from '../styles/Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (location.pathname === '/support') {
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCustomerCareClick = () => {
    navigate('/support');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="13" fill="url(#gradientHealthPro1)"/>
            <path d="M16 6 L18 12 L24 12 L19.5 16 L21.5 22 L16 18 L10.5 22 L12.5 16 L8 12 L14 12 Z" fill="white" fillOpacity="0.95"/>
            <circle cx="16" cy="16" r="4" fill="url(#gradientHealthPro2)" fillOpacity="0.8"/>
            <path d="M16 8 L17 11 L20 11 L17.5 13 L18.5 16 L16 14 L13.5 16 L14.5 13 L12 11 L15 11 Z" fill="url(#gradientHealthPro1)" fillOpacity="0.5"/>
            <circle cx="16" cy="7" r="1.5" fill="white" fillOpacity="0.9"/>
            <circle cx="11" cy="11" r="1" fill="white" fillOpacity="0.75"/>
            <circle cx="21" cy="11" r="1" fill="white" fillOpacity="0.75"/>
            <circle cx="11" cy="21" r="1" fill="white" fillOpacity="0.75"/>
            <circle cx="21" cy="21" r="1" fill="white" fillOpacity="0.75"/>
            <defs>
              <linearGradient id="gradientHealthPro1" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EA580C"/>
                <stop offset="0.5" stopColor="#DC2626"/>
                <stop offset="1" stopColor="#B91C1C"/>
              </linearGradient>
              <linearGradient id="gradientHealthPro2" x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F97316" stopOpacity="0.9"/>
                <stop offset="1" stopColor="#C2410C"/>
              </linearGradient>
            </defs>
          </svg>
          {process.env.REACT_APP_BRAND_NAME || 'HealthPro Elite'}
        </Logo>
        <NavLinks>
          <NavLink href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</NavLink>
          <NavLink href="#stats" onClick={(e) => handleNavClick(e, '#stats')}>Industry Stats</NavLink>
          <NavLink href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</NavLink>
          <NavLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</NavLink>
        </NavLinks>
        <CTAButtons>
          <Button onClick={handleCustomerCareClick}>Customer Care</Button>
          <Button $primary onClick={handleButtonClick}>Get Started</Button>
        </CTAButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
