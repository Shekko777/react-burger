import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { ConstructorModal } from './components/constructor-modal/constructor-modal';

import styles from './burger-constructor.module.css';

const constructorPropTypes = PropTypes.shape({
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

const BurgerConstructor = ({ ingredients }) => {
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  return (
    <section className={`${styles.burger_constructor} mb-10`}>
      <div className={`mb-10`}>
        <div className="mb-4 ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={ingredients.find((el) => el.type === 'bun')?.name}
            price={ingredients.find((el) => el.type === 'bun')?.price}
            thumbnail={ingredients.find((el) => el.type === 'bun')?.image}
          />
        </div>
        <ul className={`${styles.list} mb-4`}>
          {ingredients
            .filter((el) => el.type !== 'bun')
            .map((el) => (
              <li key={el._id} className={styles.item}>
                <button className={styles.dragButton} type="button">
                  <DragIcon type="primary" />
                </button>
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </li>
            ))}
        </ul>
        <div className="ml-8 mt-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={ingredients.find((el) => el.type === 'bun')?.name}
            price={ingredients.find((el) => el.type === 'bun')?.price}
            thumbnail={ingredients.find((el) => el.type === 'bun')?.image}
          />
        </div>
      </div>
      <div className={styles.resultPrice}>
        <p className="text text_type_digits-medium">610 {<CurrencyIcon />}</p>
        <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>

      {modal && <ConstructorModal onClose={handleCloseModal} title="" />}
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(constructorPropTypes).isRequired,
};

export { BurgerConstructor };
