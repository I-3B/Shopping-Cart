import { Link } from 'react-router-dom';
import '../style/HomePage.css';
const Homepage = () => {
    return (
        <div id="home-page">
            <h1>Kingdom of Gamers</h1>
            <div id="shop-link-container">
                <Link to="/Shopping-Cart/Shop">Go to the shop&#8594; </Link>
            </div>
            <div id="info">
                <p>-Get your gaming components from the best online shop!</p>
                <p>
                    -Fast delivery to any place in the world with a perfect
                    state.
                </p>
                <p>-Supports +10 E-commerce payment systems.</p>
            </div>
        </div>
    );
};
export default Homepage;
