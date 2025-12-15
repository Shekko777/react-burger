import { Tab } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import { Ingredients } from './components/Ingredients/Ingredients';

import styles from './burger-ingredients.module.css';

const burgerPropTypes = PropTypes.shape({
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

const BurgerIngredients = ({ ingredients }) => {
  const sauce = ingredients.filter((el) => el.type === 'sauce');
  const main = ingredients.filter((el) => el.type === 'main');
  const bun = ingredients.filter((el) => el.type === 'bun');

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={true}
            onClick={() => {
              /* TODO */
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>

      <div className={`${styles.ingredientsList} mb-10`}>
        <Ingredients title="Булки" data={bun} />
        <Ingredients title="Начинки" data={main} />
        <Ingredients title="Соусы" data={sauce} />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(burgerPropTypes).isRequired,
};

export { BurgerIngredients };
