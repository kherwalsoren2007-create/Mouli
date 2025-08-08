import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LetterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>My Dearest Mouli,</h2>
        <p style={{ maxWidth: 600, fontSize: '1.2em', color: '#7c6eaa', margin: '2em auto' }}>
          On this special day, I just want to say<br/>
          You are the melody in my quiet moments,<br/>
          The gentle light in my dreams.<br/>
          Every smile of yours is a sunrise,<br/>
          Every laugh, a sprinkle of stardust.<br/>
          <br/>
          Thank you for being the magic in my world.<br/>
          Happy Birthday, beautiful soul.<br/>
        </p>
        <button className="nav-btn" onClick={() => navigate('/gallery')}>Next: Memories 📸</button>
      </motion.div>
    </div>
  );
};

export default LetterPage;