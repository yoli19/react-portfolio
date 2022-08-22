import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
