import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./module.css"

function PopupExample(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button 
            // onClick={toggle}
             className="cardButton">
                <img src={args.img} className="cardImgUrl"></img>
            </Button>
            {/* <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalBody className="bg-black">
                    <img src={args.img} className="w100 radius-50"></img>
                </ModalBody>
                <ModalFooter className="cardButton bg-black">
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal> */}
        </div>
    );
}

export default PopupExample;