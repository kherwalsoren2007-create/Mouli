// Edit the welcome message and name below to personalize for your crush!
// You can also change the confetti settings for more magic.
import React from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <Confetti numberOfPieces={200} recycle={false} />
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 style={{ fontSize: '3em', marginBottom: '0.2em' }}>Happy Birthday Mouli !</h1>
        <p style={{ fontSize: '1.3em', color: '#a084ca', marginBottom: '2em' }}>
          Welcome to your magical birthday surprise ✨
        </p>
        <button className="nav-btn" onClick={() => navigate('/letter')}>Open Your Letter 💌</button>
      </motion.div>
    </div>
  );
};

export default WelcomePage;