import './card.scss';
import { useRef } from 'react';

const Card = ({id, title, price, description, img, cross}) => {

    return(
        <div className="card">
            <div className="card__header">
                <img src={img} className="card__img" alt={title}/>
                <p className="card__descr">{description}</p>
            </div>
            {cross}
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
                <p className="card__price">
                    Price: {price} €
                </p>
            </div>
        </div>
    )
}

export default Card;