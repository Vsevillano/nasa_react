import './index.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailScreen } from './screens/DetailScreen';
import { DashBoardScreen } from './screens/DashBoardScreen';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoardScreen />} exact />
          <Route path="/detail" element={<DetailScreen />} exact />        
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;