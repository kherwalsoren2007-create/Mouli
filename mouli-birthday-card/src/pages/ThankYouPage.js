import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Howl } from 'howler';

// Edit the thank-you note and music URL below to make the ending even more magical and personal.
const musicUrl = 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b6b2.mp3'; // Royalty-free soft music

const ThankYouPage = () => {
  const navigate = useNavigate();
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({ src: [musicUrl], volume: 0.3, loop: true });
    soundRef.current.play();
    return () => { soundRef.current && soundRef.current.stop(); };
  }, []);

  return (
    <div className="page">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Thank You, Mouli 🖤</h2>
        <p style={{ maxWidth: 500, fontSize: '1.2em', color: '#7c6eaa', margin: '2em auto' }}>
          For being you. For letting me be a part of your story.<br/>
          I hope this little surprise made your day a bit more magical.<br/>
          <br/>
          With all my heart,<br/>
          <span style={{ fontFamily: 'Parisienne, cursive', fontSize: '1.3em', color: '#d16ba5' }}>Your Secret Admirer</span>
        </p>
        <button className="nav-btn" onClick={() => navigate('/welcome')}>Back to Start 🎂</button>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;