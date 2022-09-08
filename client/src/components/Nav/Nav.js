import './Nav.scss';
import logo from '../../resources/Logo_min.png';
import {NavLink} from 'react-router-dom';

const Nav = () => {

    return(
        <div className='navigation '>
            <NavLink to='/' className={'navigation__item'}>
                <img className='navigation__logo' src={logo} alt="logo" />
            </NavLink>
            <NavLink to='/products' className='navigation__item nav_hover'>Products</NavLink>
            <div className='navigation__item nav_hover'>Contacts</div>
        </div>
    )
}

export default Nav;