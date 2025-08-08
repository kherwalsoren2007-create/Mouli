import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Edit the list below to add your own playful, sweet, and sincere reasons you love Mouli.

const loveList = [
  'Your magical smile',
  'The way you say my name',
  'Your dreamy eyes',
  'How you make every moment special',
  'Your laugh (it’s contagious!)',
  'The way you care for others',
  'Your sense of adventure',
  'How you light up a room',
  'Your gentle heart',
  'Just... you, being you',
];

const LoveListPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>10 Things I Love About You</h2>
        <ol style={{ textAlign: 'left', maxWidth: 400, margin: '2em auto', color: '#a084ca', fontSize: '1.15em' }}>
          {loveList.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '0.7em' }}>{item}</li>
          ))}
        </ol>
        <button className="nav-btn" onClick={() => navigate('/thank-you')}>Final Page 🎶</button>
      </motion.div>
    </div>
  );
};

export default LoveListPage;