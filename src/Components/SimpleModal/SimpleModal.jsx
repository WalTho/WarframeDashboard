import React from 'react';

const SimpleModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className='modal' style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className='modal_content' style={{backgroundColor: 'white', padding: '20px', borderRadius: '5px'}}>
                <p className='modal_content-text'>{message}</p>
                <button className='modal_content-btn' onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default SimpleModal;