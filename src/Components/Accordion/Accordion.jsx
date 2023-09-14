import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <h3 onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </h3>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}

export default Accordion;
