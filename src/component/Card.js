import { useEffect, useState } from 'react';
import '../style/Card.css';
const Card = (props) => {
    const [buyText, setBuyText] = useState('Buy');
    const [buyInputStyle, setBuyInputStyle] = useState({
        display: 'none',
    });
    const [loadingDisplay, setLoadingDisplay] = useState({ display: 'block' });
    const [imageOpacity, setImageOpacity] = useState({ display: '0' });
    const [currentItemsCount, setCurrentItemsCount] = useState(1);

    const buyClicked = (event) => {
        const buyButton = event.target;
        if (buyButton.textContent === 'Buy') {
            setBuyText('Confirm');
        } else {
            setBuyText('Buy');
            props.bought(props.description, props.price, currentItemsCount);
        }
    };
    const itemsCountOnChange = (event) => {
        let int = parseInt(event.target.value);
        if (int.isNaN) int = 0;
        setCurrentItemsCount(int);
    };
    const addOne = () => {
        currentItemsCount
            ? setCurrentItemsCount((currentItemsCount) => currentItemsCount + 1)
            : setCurrentItemsCount(1);
    };
    const subtractOne = () => {
        if (currentItemsCount <= 0 || !currentItemsCount)
            setCurrentItemsCount(0);
        else setCurrentItemsCount((currentItemsCount) => currentItemsCount - 1);
    };
    useEffect(() => {
        if (buyText === 'Buy') {
            setBuyInputStyle({ display: 'none' });
        } else {
            setBuyInputStyle({ display: 'flex' });
        }
    }, [buyText]);
    return (
        <div className="card">
            <div className="container">
                <img
                    src={'/images/' + props.img + '.jpg'}
                    alt={props.img}
                    onClick={() => {
                        return window.open(
                            '/images/' + props.img + '.jpg',
                            '_blank'
                        );
                    }}
                    onLoad={() => {
                        setLoadingDisplay({ display: 'none' });
                        setImageOpacity({ opacity: '1' });
                    }}
                ></img>

                <img
                    style={loadingDisplay}
                    className="loading"
                    src={'/images/loading.svg'}
                    alt="loading"
                ></img>
                <div className="buy-input" style={buyInputStyle}>
                    <div className="items-count">
                        <div onClick={subtractOne} className="minus">
                            -
                        </div>
                        <div>
                            <input
                                onChange={itemsCountOnChange}
                                type="number"
                                value={currentItemsCount}
                            ></input>
                        </div>
                        <div onClick={addOne} className="plus">
                            +
                        </div>
                    </div>
                    <div className="bought">1 item.</div>
                    <div className="total-cost">
                        Total:{' '}
                        {currentItemsCount
                            ? currentItemsCount * props.price
                            : 0}
                        $.
                    </div>
                </div>
            </div>
            <div className="description">{props.description}</div>
            <div className="cost">Price: {props.price}$</div>
            <div className="buy-button" onClick={buyClicked}>
                {buyText}
            </div>
        </div>
    );
};

export default Card;
