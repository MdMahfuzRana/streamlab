import './App.css';
import ModalPopUp from './Components/ModalPop/ModalPopUp';
import Home from './Views/Home';
import { Button } from 'react-bootstrap'
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <ModalPopUp
          show={modalShow}
          onHide={() => setModalShow(false)}
       />
      <Home/>
    </div>
  );
}

export default App;
