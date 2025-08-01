import React, { useState } from 'react';
import './App.css';

function App() {
  const [openIndex, setOpenIndex] = useState(null); // Stores which question is open

  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What is useState?',
      answer: 'useState is a Hook that lets you add state to functional components.',
    },
    {
      question: 'How does conditional rendering work?',
      answer: 'Conditional rendering lets you show different UI based on state or props.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default App;
