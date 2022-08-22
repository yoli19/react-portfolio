import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage';
import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
