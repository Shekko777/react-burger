import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { ingredientPropTypes } from '../../utils/types';
import { Modal } from '../modal/modal';
import { OrderDetails } from './components/order-details/order-details';

import styles from './burger-constructor.module.css';

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
            text={ingredients.find((el) => el.type === 'bun')?.name + ' (верх)'}
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
            text={ingredients.find((el) => el.type === 'bun')?.name + ' (низ)'}
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

      {modal && (
        <Modal onClose={handleCloseModal} title="">
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export { BurgerConstructor };
