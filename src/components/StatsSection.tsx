import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Healthcare Consultations',
      description: 'Unlimited virtual appointments with board-certified medical professionals anytime',
      value: '24/7',
           background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'
    },
    {
      title: 'Member Approval',
      description: 'Users experiencing enhanced wellbeing and lifestyle improvements',
      value: '94%',
      background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'
    },
    {
      title: 'Yearly Cost Reduction',
      description: 'Typical annual reduction in health and fitness expenditures for active members',
      value: '$2,850',
            background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'
    },
    {
      title: 'Partner Facilities',
      description: 'Network of elite gyms, training centers, and wellness venues across America',
        value: '12,500+',
             background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Real Numbers, Real Impact</StatsSectionTitle>
        <StatsSectionDescription>
          Discover how our comprehensive wellness platform creates measurable value and transformative health outcomes.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
