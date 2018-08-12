import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Container from './Components/Container'
class App extends Component {
  render() {
    return (
      <div>
      
      <Navbar />

      <Header />
  
      <Container />
      
  
      <hr />
  
    
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">Copyright &copy; Your Website 2018</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
