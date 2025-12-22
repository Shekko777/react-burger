import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import styles from './card.module.css';

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

const Card = ({ el, count, handleClick }) => {
  return (
    <li className={styles.item} onClick={handleClick}>
      {count && <Counter count={count} size="default" extraClass="m-1" />}
      <img className={styles.image} src={el.image} alt="Описание картинки" />
      <div className={`${styles.price} text_type_main-default`}>
        <p className={`${styles.priceCount} text_type_main-default`}>{el.price}</p>
        <CurrencyIcon />
      </div>
      <p className={`${styles.name} text_type_main-default`}>{el.name}</p>
    </li>
  );
};

Card.propTypes = {
  el: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export { Card };
