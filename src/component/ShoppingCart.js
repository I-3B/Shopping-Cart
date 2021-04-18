import { useEffect, useState } from 'react';
import '../style/ShoppingCart.css';
import CartCard from './CartCard';
const ShoppingCart = (props) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const buyingProcess = () => {
        setProducts([]);
        setTotal(0);
        props.purchasesParent(new Map());
    };
    const removeCallback = (itemCanceled, totalCost) => {
        props.remove(itemCanceled);
        setTotal((total) => total - totalCost);
    };
    useEffect(() => {
        setProducts((products) => []);
        setTotal((total) => 0);
        console.log(props.purchases);
        props.purchases.forEach(([price, amount], name) => {
            setProducts((products) => [
                ...products,
                <CartCard
                    remove={removeCallback}
                    name={name}
                    price={price}
                    amount={amount}
                    key={name}
                />,
            ]);
            setTotal((total) => total + price * amount);
        });
    }, [props]);

    return (
        <div id="shopping-cart">
            {products}
            <div className="check-out">
                Total cost: {total}$<div onClick={buyingProcess}>Check out</div>
            </div>
        </div>
    );
};
export default ShoppingCart;
