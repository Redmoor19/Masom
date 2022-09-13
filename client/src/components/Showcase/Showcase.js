import './showcase.scss';
import Card from '../Card/Card.js';
import { useApi } from '../../services/apiService';
import { useState, useEffect } from 'react';

const Showcase = () => {

    const {getProducts, loading, error, cleanError} = useApi();

    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts()
            .then( res => setProducts(res));
    }, [])

    return(
        <div className='container'>
            {/* {products.map(item => 
                <Card 
                    key={item._id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    img={item.base64}
                />
            )} */}
        </div>
    )
};

export default Showcase;