import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Modal } from '../../../modal/modal';

import styles from './ingredients-modal.module.css';

const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});
const modalRoot = document.querySelector('#modal-root');

const IngredientsModal = ({ ingredient, onClose }) => {
  return createPortal(
    <Modal onClose={onClose} title="Детали ингредиента">
      <img className={styles.image} src={ingredient.image_large} alt="картинка" />
      <p className={`${styles.name} text text_type_main-medium mt-4`}>
        {ingredient.name}
      </p>
      <ul className={`${styles.nutritionLabels} mt-8 mb-15`}>
        <li>
          <p
            className={`${styles.text} text text_type_main-default text_color_inactive`}
          >
            Калории, ккал
            <span className="text text_type_digits-default">{ingredient.calories}</span>
          </p>
        </li>
        <li>
          <p
            className={`${styles.text} text text_type_main-default text_color_inactive`}
          >
            Белки, г{' '}
            <span className="text text_type_digits-default">{ingredient.proteins}</span>
          </p>
        </li>
        <li>
          <p
            className={`${styles.text} text text_type_main-default text_color_inactive`}
          >
            Жиры, г{' '}
            <span className="text text_type_digits-default">{ingredient.fat}</span>
          </p>
        </li>
        <li>
          <p
            className={`${styles.text} text text_type_main-default text_color_inactive`}
          >
            Углеводы, г
            <span className="text text_type_digits-default">
              {ingredient.carbohydrates}
            </span>
          </p>
        </li>
      </ul>
    </Modal>,
    modalRoot
  );
};

IngredientsModal.propTypes = {
  ingredient: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  onClose: PropTypes.func.isRequired,
};

export { IngredientsModal };
