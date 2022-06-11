import './index.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailScreen } from './screens/DetailScreen';
import { DashBoardScreen } from './screens/DashBoardScreen';

function App() {

  return (
    <>
      <div className='container-fluid px-0'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashBoardScreen />} exact />
            <Route path="/detail/:date" element={<DetailScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );

}

export default App;