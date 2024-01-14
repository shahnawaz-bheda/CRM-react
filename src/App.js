import logo from './logo.svg';
import './App.css';
import './index.css';
import Leads from './Components/Leads';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Helpdesk from './Components/Helpdesk';
import Detail from './Components/Detail';
import Header from './Components/Header'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Leads btn1="New" />} />
          <Route path='/Helpdesk' element={<Helpdesk />} />
          <Route path='/Details' element={<Detail />} />
        </Routes>
      </BrowserRouter>

      {/* <Header btn1="New" /> */}
      
    </>
  );
}

export default App;

