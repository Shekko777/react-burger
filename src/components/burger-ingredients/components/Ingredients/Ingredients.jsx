import PropTypes from 'prop-types';

import { Card } from '../Card/Card';

import styles from './Ingredients.module.css';

const dataPropTypes = PropTypes.shape({
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

const Ingredients = ({ title, data }) => {
  return (
    <section className={`mt-10 ${styles.ingredients}`}>
      <h2 className="text text_type_main-large">{title}</h2>
      <ul className={`ml-4 mr-4 ${styles.list}`}>
        {data.map((el, index) => (
          <li className={`${styles.item}`} key={index}>
            <Card image={el.image} price={el.price} name={el.name} count={5} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(dataPropTypes).isRequired,
};

export { Ingredients };
