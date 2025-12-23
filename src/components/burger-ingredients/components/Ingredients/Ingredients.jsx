import PropTypes from 'prop-types';
import { useState } from 'react';

import { ingredientPropTypes } from '../../../../utils/types';
import { Modal } from '../../../modal/modal';
import { Card } from '../card/card';
import { IngredientsDetails } from '../ingredients-details/ingredients-details';

import styles from './Ingredients.module.css';

const Ingredients = ({ title, data }) => {
  const [modal, setModal] = useState(false);
  const [activeIngredient, setActiveIngredient] = useState(null);

  const handleOpenModal = (ingredient) => {
    setModal(true);
    setActiveIngredient(ingredient);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <section className={`mt-10 ${styles.ingredients}`}>
      <h2 className="text text_type_main-large">{title}</h2>
      <ul className={`ml-4 mr-4 ${styles.list}`}>
        {data.map((el) => (
          <Card key={el._id} el={el} count={1} handleClick={() => handleOpenModal(el)} />
        ))}
      </ul>
      {modal && (
        <Modal onClose={handleCloseModal} title="Детали ингредиента">
          <IngredientsDetails ingredient={activeIngredient} />
        </Modal>
      )}
    </section>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export { Ingredients };
