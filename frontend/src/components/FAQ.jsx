import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqData = [
  {
    question: "Does Electric Tractor have same pull and torque as diesel Tractor?",
    answer: "The Electric Tractor has more torque, high efficiency and best-in-class drawbar pull compared to conventional diesel Tractor."
  },
  {
    question: "What is the expected battery life of Bullwork vehicles?",
    answer: "Bullwork vehicles run on high-quality lithium-ion batteries, these batteries offer a long life of up to 7 years after which the battery can still be used for power storage purpose like home UPS etc."
  },
  {
    question: "Can standard implements be attached with Vamana, GLX, and the Electric Tractor models?",
    answer: "Yes, standard implements can be attached."
  },
  {
    question: "How do you charge Bullwork vehicles?",
    answer: "You can charge Bullwork vehicles using standard home or industrial electric outlets."
  },
  {
    question: "Is there any maintenance required for the electric tractor?",
    answer: "Electric tractors have fewer moving parts and typically require less maintenance than diesel ones."
  },
  {
    question: "What is the warranty offered on Bullwork electric tractors?",
    answer: "Bullwork offers a 5-year warranty on electric tractors, including battery and motor coverage."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const visibleData = showAll ? faqData : faqData.slice(0, 4);

  return (
    <div className="faq-container">
      <h1 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h1>
      {visibleData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className="arrow">{activeIndex === index ? "▴" : "▾"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
}

export default FAQ;


