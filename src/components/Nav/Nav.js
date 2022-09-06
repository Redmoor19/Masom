import './Nav.scss';
import logo from '../../resources/Logo_min.png'

const Nav = () => {
    return(
        <div className='navigation '>
            <div className='navigation__item'>
                <img className='navigation__logo' src={logo} alt="logo" />
            </div>
            <div className='navigation__item nav_hover'>Products</div>
            <div className='navigation__item nav_hover'>Contacts</div>
        </div>
    )
}

export default Nav;