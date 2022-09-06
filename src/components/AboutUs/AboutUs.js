import './aboutUs.scss';
import DetergentIcon from '../../resources/icons/detergentIcon/detergent';
import Anthony from '../../resources/Anthony.jpg';
import Danila from '../../resources/Danila.jpg';
import Iksu from '../../resources/Iksu.jpg';
import Olasumbo from '../../resources/Olasumbo.jpg';
import Safal from '../../resources/Safal.png';
import Liza from '../../resources/Liza.png';
 
const AboutUs = () => {
    const staff = [
        {image: Anthony, name: 'Anthony Owala', description: 'CEO/ Finance Director'},
        {image: Danila, name: 'Danila Mandrabura', description: 'Product Manager/ IT Specialist'},
        {image: Liza, name: 'Elizaveta Sabanova', description: 'Marketing Manager'},
        {image: Iksu, name: 'Iksu Stepanova', description: 'Visualist/ Secretary'},
        {image: Olasumbo, name: 'Olasumbo Akinremi', description: 'Sales Manager'},
        {image: Safal, name: 'Safal Mahat', description: 'HR/ Secretary'}
    ];
    
    return(
        <div className="container">
            <div className="aboutUs">
                <h2 className="aboutUs__title">About us</h2>
                <DetergentIcon color='black'/>
                <p className='aboutUs__descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus molestiae, necessitatibus neque voluptatibus nisi debitis doloremque rerum eum, quaerat inventore voluptatem odit, fugit commodi odio sequi dolore? Itaque, expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum quidem cupiditate ad architecto illum iure. Quidem eligendi non quisquam enim, voluptatem quos architecto. Eligendi quae saepe odio voluptate et.</p>
                <div className="aboutUs__wrapper">
                    {staff.map( item => <Portfolio key={item.name} image={item.image} name={item.name} description={item.description}/>)}
                </div>
            </div>
        </div>
    )
}

const Portfolio = ({image, name, description}) => {
    return(
        <div className='portfolio'>
            <img src={image} alt={name} className="portfolio__image" />
            <p className="portfolio__name">{name}</p>
            <p className="portfolio__description">{description}</p>
        </div>
    )
}

export default AboutUs;