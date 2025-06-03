import React from 'react';
import '../styles/Logos.css';


import press1 from '../assets/a1.webp';
import press2 from '../assets/a2.webp';
import press3 from '../assets/a3.webp';
import press4 from '../assets/a4.webp';
import press5 from '../assets/a5.webp';
import press6 from '../assets/a6.webp';

import award1 from '../assets/l1.webp';
import award2 from '../assets/l2.webp';
import award3 from '../assets/l3.webp';

import award5 from '../assets/l5.webp';

const pressLogos = [press1, press6, press2, press3, press4, press5];
const awardsLogos = [award1, award2, award3,award5];

export default function Logos() {
  return (
    <div className="press-awards-container">
      <h2 className="section-title">PRESS RELEASES</h2>
      <div className="logo-strip">
        <div className="logo-strip-inner">
          {pressLogos.map((src, i) => (
            <img key={i} src={src} alt={`press-logo-${i + 1}`} className="logo-img" />
          ))}
        </div>
      </div>

      <h2 className="section-title">AWARDS AND CERTIFICATIONS</h2>
      <div className="logo-strip">
        <div className="logo-strip-inner reverse">
          {awardsLogos.map((src, i) => (
            <img key={i} src={src} alt={`award-logo-${i + 1}`} className="logo-img" />
          ))}
        </div>
      </div>
    </div>
  );
}
