import "./module.css"
import { useApi } from '/src/hooks/useApi.jsx';
import React, { useEffect, useState } from 'react';

function ModalPopUp(props) {
    const { img, name, modalType } = props;
    const api                      = useApi();
    const [ modalId, setModalId ]  = useState(null);

    function handleClick () {
        var modal = document.getElementById(modalId);

        if (modal != null) {
            modal.style.display = "block";
        }
    }

    // When the user clicks on <span> (x), close the modal
    function handleCloseClick () {
        var modal = document.getElementById(modalId);

        if (modal != null) {
            modal.style.display = "none";
        }
    }

    document.addEventListener('mousedown', handleCloseClick);

    useEffect(() => {
        setModalId(api.createModalLink(name, modalType));
        
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleCloseClick);
        };
    }, []);

    return (
        <>  
            <div className="pointer" onClick={() => handleClick()}>
                <img src={img} className="cardImgUrl" height="27" width="20" />
            </div>
            <div id={api.createModalLink(name, modalType)} className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close pointer" onClick={() => handleCloseClick()}>Close</span>
                    </div>
                    <div className="modal-body">
                        <img src={img} className="left" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalPopUp;