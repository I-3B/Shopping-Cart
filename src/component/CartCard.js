import { useEffect, useState } from 'react';
import '../style/CartCard.css';
const CartCard = (props) => {
    const removeItem = () => {
        props.remove(props.name, props.price * props.amount);
        setBody(<></>);
    };
    const [body, setBody] = useState(
        <div className="cart-card">
            <h3>Product name: {props.name}</h3>
            <p>Price: {props.price}</p>
            <p>Amount: {props.amount}</p>
            <hr />
            <p>Total: {props.amount * props.price}$</p>
            <p onClick={removeItem}>Cancel</p>
        </div>
    );
    return <>{body}</>;
};
export default CartCard;
