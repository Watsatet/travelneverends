import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import SearchResults from './pages/SearchResults';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  return (
    <>
    <Router>
      <AppContainer>
        <Header />
        <Content>
          <Routes>
            <Route path="/" active element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>
    </>
  );
}

export default App;
