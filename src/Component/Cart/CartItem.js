import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className={classes['cart-item']}>
      <div style={{fontSize:'20px',fontFamily: "'Crimson Text', serif"}}>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;