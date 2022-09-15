import './showcase.scss';
import Card from '../Card/Card.js';
import Spinner from '../Spinner/Spinner';
import { useApi } from '../../services/apiService';
import { useState, useEffect } from 'react';

const Showcase = () => {

    const {getProducts, loading} = useApi();

    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts()
            .then( res => setProducts(res));
    //eslint-disable-next-line
    }, [])

    const showcase = !loading ? products.map(item => 
        <Card 
            key={item._id}
            title={item.title}
            price={item.price}
            description={item.description}
            img={item.base64}
        />
    ) : null;
    const spinner = loading ? <Spinner size='150px' margin='100px' /> : null;

    return(
        <div className='container'>
            {spinner}
            <div className="showcase">
                {showcase}
            </div>
        </div>
    )
};

export default Showcase;