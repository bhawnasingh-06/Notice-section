import React, { useState } from 'react';
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item transition">
      <div className="cursor-pointer transition" onClick={() => setIsActive(!isActive)}>
        <div className='flex items-stretch px-3 py-4 border-b-2'>{title} {isActive?<GoChevronUp className='ml-2' />:<GoChevronDown className='ml-2' /> }   </div>
        
      </div>
      {isActive && <div className="accordion-content px-3 py-4 transition">{content}</div>}
    </div>
  );
};

export default Accordion;