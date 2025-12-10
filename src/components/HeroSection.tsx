import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const handleGetStarted = () => {
    const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.ecomhealthperks.com';
    window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Unlock Your Complete Wellness Potential</Tagline>
        <HeroTitle>
          Elevate Your Lifestyle.
          <Highlight>Smart. Simple. Life-Changing.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Discover an innovative wellness solution featuring unlimited fitness access, round-the-clock medical care, 
          expert nutritional coaching, comprehensive mental wellness resources, and proactive health monitoring. 
          Keep more money in your pocket while reaching peak health and vitality.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleGetStarted}>
            Get Started →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleLearnMore}>
            Talk to sales
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
