import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import LetterPage from './pages/LetterPage';
import GalleryPage from './pages/GalleryPage';
import SurprisePage from './pages/SurprisePage';
import LoveListPage from './pages/LoveListPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Router>
      <div className="App dreamy-bg">
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/letter" element={<LetterPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/surprise" element={<SurprisePage />} />
          <Route path="/love-list" element={<LoveListPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
