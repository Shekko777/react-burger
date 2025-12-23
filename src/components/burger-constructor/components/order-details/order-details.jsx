import done from '../../../../images/done.png';

const OrderDetails = () => {
  return (
    <>
      <h2 className="text text_type_digits-large">034536</h2>
      <p className="text text_type_main-medium mt-8">Идентификатор заказа</p>
      <img className="mt-15" src={done} alt="Галочка" />
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export { OrderDetails };
