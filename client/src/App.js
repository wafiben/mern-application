import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm/LoginForm";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
function App() {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
          <div className="container">
            <Link to="/login" className="navbar-brand">
              Login
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    pick a car
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="fw-light">Get your car</h1>
                <p className="lead">
                  Welcome we help you to choose your car or sell your car
                </p>
              </div>
            </div>
          </div>
        </header>
        <section className="py-5">
          <div className="container">
            <h2 className="fw-light">Page Content</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus ab nulla dolorum autem nisi officiis blanditiis
              voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
              cumque magnam enim fugiat reprehenderit expedita.
            </p>
          </div>
        </section>
      
          <Route  exact path="/login" element={<LoginForm />} />
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
