import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'

function ModalPopUp(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body  style={{backgroundColor:"black"}} >
          <center>
              <ReactPlayer controls playing width='100%' height='280px' url='https://youtu.be/X0tOpBuYasI' />
          </center>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalPopUp