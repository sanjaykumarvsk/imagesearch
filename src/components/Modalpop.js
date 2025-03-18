import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export class Modalpop extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Image
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                  <img src= {Image}alt="a"/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger">Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}
export default Modalpop;