import './index.css'
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { DetailScreen } from './screens/DetailScreen';
import { DashBoardScreen } from './screens/DashBoardScreen';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='container-fluid px-0'>          
          <nav className="navbar navbar-dark bg-dark mb-3">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                NASA App
              </Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<DashBoardScreen />} exact />
            <Route path="/detail/:date" element={<DetailScreen />} />
          </Routes>
        </div>
        <footer className="bg-dark text-center text-white mt-5">
          <div className="container p-4">
            <section className="mb-4">
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Vsevillano1991/" target="_blank" rel="noreferrer noopener" role="button">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Vsevillanoo" target="_blank" rel="noreferrer noopener" role="button">
                <i className="fab fa-twitter"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/vsevillano91/" target="_blank" rel="noreferrer noopener" role="button">
                <i className="fab fa-instagram"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/victoriano-sevillano-vega/" target="_blank" rel="noreferrer noopener" role="button">
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Vsevillano" target="_blank" rel="noreferrer noopener" role="button">
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: `#000000` }}>
            Diseña y desarrolla: <a className="text-white" href="/">Victoriano Sevillano Vega</a>
          </div>
        </footer>
      </BrowserRouter>

    </>

  );

}

export default App;