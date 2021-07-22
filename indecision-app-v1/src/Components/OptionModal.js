import React from 'react';
import Modal from 'react-modal';
 const OptionModal = (props) => {
     return(
         <Modal
            isOpen={!!props.toggler}
            onRequestClose={props.handleRemove}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
         >
            <h3 className="modal__title">Selected Option</h3>
            {props.toggler && <p className="modal__body">{props.toggler}</p>}
            <button className="button" onClick={props.handleRemove}>Okay</button>
         </Modal>
     );
 }

 export default OptionModal;