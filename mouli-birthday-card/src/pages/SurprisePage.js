import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SurprisePage = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Surprise! 🎁</h2>
        {/* Edit the poem or secret message below to make it extra special for Mouli. */}
        <p style={{ maxWidth: 500, fontSize: '1.2em', color: '#7c6eaa', margin: '2em auto' }}>
          Roses are red,<br/>
          Violets are blue,<br/>
          The world is brighter<br/>
          Because of you.<br/>
          <br/>
          (P.S. There's a secret message here just for you!)
        </p>
        <button className="nav-btn" onClick={() => navigate('/love-list')}>Next: 10 Things I Love 🌈</button>
      </motion.div>
    </div>
  );
};

export default SurprisePage;