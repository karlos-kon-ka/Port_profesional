import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const BotonSubida = () => {
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();

  const toggleVisibility = () => {
    if (window.pageYOffset > document.querySelector('.presentacion').offsetHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    controls.start({
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='boton-subida'>
      {visible && (
        <motion.button 
          onClick={scrollToTop} 
          className='subida'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
};

export default BotonSubida;
