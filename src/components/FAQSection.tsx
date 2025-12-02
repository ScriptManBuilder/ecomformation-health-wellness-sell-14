import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What wellness services are included in membership?',
      answer: 'Your membership includes unlimited access to 12,500+ fitness facilities and training studios, around-the-clock virtual medical consultations with certified doctors, customized nutrition coaching, confidential mental health counseling, comprehensive preventive health screenings, rewards incentives, and exclusive discounts on healthy food delivery.'
    },
    {
      question: 'How quickly can I begin using benefits?',
      answer: 'Registration provides immediate access to your member dashboard. Locate nearby fitness locations, book virtual healthcare appointments, review nutrition guidelines, and schedule wellness consultations directly via our online platform. All benefits activate instantly following enrollment.'
    },
    {
      question: 'What cost savings should I expect annually?',
      answer: 'Active members generally reduce expenses by $2,000-$3,500 per year based on utilization patterns. Fitness access alone provides $700-$1,400 yearly savings, virtual care visits eliminate $600-$900 compared to walk-in clinics, and nutrition coaching delivers $500-$700 in value. Regular use of just 2-3 benefits ensures positive ROI.'
    },
    {
      question: 'Which fitness facilities are available to me?',
      answer: 'Our nationwide network includes 12,500+ gyms and specialized studios featuring leading chains like LA Fitness, Golds Gym, Anytime Fitness, Planet Fitness, alongside boutique locations for yoga, Pilates, CrossFit, spin classes, and additional disciplines. Search your local area through the membership portal.'
    },
    {
      question: 'Is there a cap on virtual doctor visits?',
      answer: 'Absolutely not! Enjoy unlimited round-the-clock access to board-certified physicians, counselors, and medical experts via our telemedicine network. Zero visit restrictions, no blackout dates, and no extra charges for online medical consultations.'
    },
    {
      question: 'Do family members have access to benefits?',
      answer: 'Definitely! Multiple benefits extend to direct family members residing in your household. Fitness facility access, telemedicine appointments, and wellness programs are frequently shareable with your partner and children, varying by membership level.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Common Questions Answered</FAQTitle>
        <FAQDescription>
          Key information about our comprehensive wellness membership program
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
