import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import './modal.css'
export const Modal = (props: any): ReactPortal => {

    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}
            className="myModal"
        > 
             {/* <div
                onClick={e => e.stopPropagation()}
                className="ui standard modal visible active"
            > */}
             <button onClick={props.onDismiss} className='modal__close'>&times;</button>
              <div onClick={e => e.stopPropagation()} >
                  <div className="mymodal-title">{props.title}</div>
                  <div className="mymodal-content">{props.content}</div>
                  <div className="mymodal-footer">{props.actions}</div>
              </div>
        </div>,
        document.querySelector('#modal') as HTMLElement
    );
};


