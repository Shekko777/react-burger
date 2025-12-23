import PropTypes from 'prop-types';
import { useEffect } from 'react';

import styles from './modal-overlay.module.css';

const ModalOverlay = ({ onClose, children }) => {
  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };

    document.body.addEventListener('keydown', handleEscape);

    return () => {
      document.body.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <section className={styles.modalOverlay} onClick={handleOverlay}>
      {children}
    </section>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { ModalOverlay };
