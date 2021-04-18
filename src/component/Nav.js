import { Link } from 'react-router-dom';
import '../style/Nav.css';
const Nav = (props) => {
    return (
        <nav>
            <Link id="home-anchor" to="/">
                Home
            </Link>
            <Link id="shop-anchor" to="/Shop">
                Shop
            </Link>
            <Link id="bag-anchor" to="/Purchases">
                Purchases ({props.items}){' '}
            </Link>
        </nav>
    );
};
export default Nav;
