import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { ModalOverlay } from './modal-overlay/modal-overlay';

import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ title = '', onClose, children }) => {
  return createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={`${styles.modal} text pt-5 pb-5`}>
        <div className={`${styles.modalHeader} mt-10 mr-10 ml-10`}>
          <h1 className="text text_type_main-large">{title}</h1>
          <button className={styles.close} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.modalContainer}>{children}</div>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal };
