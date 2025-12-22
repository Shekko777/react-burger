import PropTypes from 'prop-types';

import { ingredientPropTypes } from '../../../../utils/types';

import styles from './ingredients-details.module.css';

const IngredientsDetails = ({ ingredient }) => {
  return (
    <>
      <img
        className={styles.image}
        src={ingredient.image_large}
        alt={`На картинке ${ingredient.name}`}
      />
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
    </>
  );
};

IngredientsDetails.propTypes = {
  ingredient: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export { IngredientsDetails };
