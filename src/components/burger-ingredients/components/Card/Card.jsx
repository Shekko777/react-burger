import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import { ingredientPropTypes } from '../../../../utils/types';

import styles from './card.module.css';

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
