import './footer.scss';
import facebook from '../../resources/icons/facebook.png';
import instagram from '../../resources/icons/instagram.png';
import twitter from '../../resources/icons/twitter.png';
import youtube from '../../resources/icons/youtube.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className="container">
                <div className="footer__mininav">
                    <NavLink to='/'><div className="footer__mininav-item">Main</div></NavLink>
                    <NavLink to='/products'><div className="footer__mininav-item">Products</div></NavLink>
                    <div className="footer__mininav-item">Contacts</div>
                </div>
                <div className="divider"></div>
                <div className="footer__medias">
                    <div className="footer__medias-item">
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className="footer__medias-item">
                        <img src={instagram} alt="instagram" />
                    </div>
                    <div className="footer__medias-item">
                        <img src={twitter} alt="twitter" />
                    </div>
                    <div className="footer__medias-item">
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;