import { Link } from 'react-router-dom';
import '../style/Nav.css';
const Nav = (props) => {
    return (
        <nav>
            <Link id="home-anchor" to="/Shopping-Cart">
                Home
            </Link>
            <Link id="shop-anchor" to="/Shopping-Cart/Shop">
                Shop
            </Link>
            <Link id="bag-anchor" to="/Shopping-Cart/Purchases">
                Purchases ({props.items}){' '}
            </Link>
        </nav>
    );
};
export default Nav;
