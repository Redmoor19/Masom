import './smallBg.scss';
import DetergentIcon from '../../resources/icons/detergentIcon/detergent';

const SmallBG = ({title}) => {
    return(
        <div className="smallBg">
            <div className="container">
                <h2 className="title smallBg__title">{title}</h2>
                <DetergentIcon color='white'/>
            </div>
        </div>
   )
};

export default SmallBG;