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
                NASA app
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
              <Link className="btn btn-outline-light btn-floating m-1" to="https://www.facebook.com/Vsevillano1991/" target="_blank" role="button"><i
                className="fab fa-facebook-f"></i></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="https://twitter.com/Vsevillanoo" target="_blank" role="button"><i className="fab fa-twitter"></i></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="https://www.instagram.com/vsevillano91/" target="_blank" role="button"><i
                className="fab fa-instagram"></i></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="https://www.linkedin.com/in/victoriano-sevillano-vega/" target="_blank" role="button"><i
                className="fab fa-linkedin-in"></i></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="https://github.com/Vsevillano" target="_blank" role="button"><i className="fab fa-github"></i></Link>
            </section>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: `#000000` }}>
            Diseña y desarrolla: <Link className="text-white" to="/">Victoriano Sevillano Vega</Link>
          </div>
        </footer>
      </BrowserRouter>

    </>

  );

}

export default App;