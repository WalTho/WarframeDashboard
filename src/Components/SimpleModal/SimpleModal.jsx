import React from 'react';

const SimpleModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className='modal'>
            <div className='modal_content'>
                <p className='modal_content-text'>{message}</p>
                <button className='modal_content-btn' onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default SimpleModal;