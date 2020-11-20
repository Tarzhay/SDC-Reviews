import React, {useState} from 'react';

const Modal = (props) => {
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <div className="Modal">
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="ModalInner">
          <div className="modalImage">
            <img src="https://www.section8ski.com/wp-content/uploads/ski-instructor-course-powder-face-shots.jpg" alt="modal pic"/>
          </div>
          <div className="modalText">
            <h2>This is a modal header</h2>
            <p>Lorem Ipsum</p>
            <form action="">
              <button>Join now!</button>
            </form>
          </div>
        </div>
      </div>
      <button onClick={() => toggleModalState()}>Open Modal</button>
    </div>
  )
}

export default Modal;