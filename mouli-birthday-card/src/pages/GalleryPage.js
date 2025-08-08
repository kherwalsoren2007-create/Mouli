import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

const GalleryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Our Memories</h2>
        <div style={{
          border: '2px dashed #d16ba5',
          borderRadius: 24,
          padding: '2em',
          minHeight: 200,
          minWidth: 300,
          background: 'rgba(255,255,255,0.5)',
          marginBottom: '2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <FaPlus size={32} color="#d16ba5" style={{ marginBottom: 8 }} />
          <span style={{ color: '#a084ca', fontSize: '1.1em' }}>
            (Add your favorite photos here soon!)
          </span>
        </div>
        <button className="nav-btn" onClick={() => navigate('/surprise')}>Next: A Little Surprise 🎁</button>
      </motion.div>
    </div>
  );
};

export default GalleryPage;