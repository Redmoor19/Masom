import './card.scss';
import { useState } from 'react';

const Card = ({id, title, price, description, img, cross}) => {

    const [toggle, setToggle] = useState(false);
    const changeHandler = () => {
        setToggle(!toggle);
    }

    return(
        <div className="card">
            <div onClick={changeHandler} className="card__header">
                <img src={img} className={`card__img ${toggle? 'invisible' : null}`} alt={title}/>
                <p className={`card__text ${!toggle? 'invisible' : null}`} >{description}</p>
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