import '../../styles/admin.scss';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../services/apiService';
import FileBase64 from 'react-file-base64';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner.js';

const Admin = () => {
    const { loading, getProducts, createProduct, deleteProduct, getOrders} = useApi();
    const [product, setProduct] = useState({title: '', price: '', description: '', image: ''});
    const [data, setData] = useState([]);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setProduct({...product,[e.target.name]: e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        createProduct(JSON.stringify(product))
            .then( () => {
                setData([...data, product]);
                setProduct({title: '', price: '', description: '', image: ''});
            })
            .catch( () => {
                logout();
                setProduct({title: '', price: '', description: '', image: ''});
            })
    };

    const onDeleteHandler = (id) => {
        setData(data.filter( (item) => item._id !== id ));
        deleteProduct(id)
            .then(res => console.log(res))
            .catch(() => {
                logout();
            });
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }

    useEffect( () => {
        getProducts()
            .then(array => setData(array));
        getOrders()
            .then(array => setOrders(array));
        //eslint-disable-next-line
    },[])

    const spinner = loading ? <Spinner size="150px" margin={50}/> : null;
    const products = !loading ? 
        <div className="products">
            {data.map( item => (<Card
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                description={item.description}
                img={item.base64}
                cross={<div 
                    className="cross"
                    onClick={() => onDeleteHandler(item._id)}>
                    </div>}
            />))}
        </div> : null;

    return(
        <div className='container'>
            <button onClick={logout} className="button admin_button">Log out</button>
            <form 
                action="" 
                className="productForm"
                onSubmit={onSubmitHandler}>
                <div className="formTitle">
                    <label className='productForm__label' name='title' htmlFor="">Title</label>
                    <input 
                        type="text"
                        name="title"
                        value={product.title} 
                        className='productForm__input'
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="formPrice">
                    <label className='productForm__label' name='price' htmlFor="">Price</label>
                    <input 
                        type="number"
                        name="price"
                        value={product.price} 
                        className='productForm__input'
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="formDescr">
                    <label className='productForm__label' name='description' htmlFor="">Description</label>
                    <textarea 
                        type="text"
                        name="description"
                        value={product.description} 
                        className='productForm__input'
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="file">
                    <FileBase64
                    className='formFile'
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setProduct({...product, base64})}    
                    />
                </div>
                <button 
                    className='admin_button button'
                    >
                    Submit
                </button>
            </form>
            
            {spinner}
            {products}
            
        </div>
    )
}

export default Admin;