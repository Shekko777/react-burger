import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = ({ price, name, image, count }) => {
  return (
    <>
      {count && <Counter count={count} size="default" extraClass="m-1" />}
      <img className={styles.image} src={image} alt="Описание картинки" />
      <div className={`${styles.price} text_type_main-default`}>
        <p className={`${styles.priceCount} text_type_main-default`}>{price}</p>
        <CurrencyIcon />
      </div>
      <p className={`${styles.name} text_type_main-default`}>{name}</p>
    </>
  );
};

Card.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export { Card };
