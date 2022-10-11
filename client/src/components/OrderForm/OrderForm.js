import './orderForm.scss';
import { useState} from 'react';
import { useApi } from '../../services/apiService';
import Modal from '../Modal/Modal';

const OrderForm = () => {

    const [order, setOrder] = useState({email: '',
                                        dishWasher: '', 
                                        floorCleaner: '',
                                        disinfectant: '',
                                        glassCleaner: ''});
    const [show, setShow] = useState(false);

    const {createOrder} = useApi();

    const onChangeHandler = (e) => {
        setOrder({...order, [e.target.name] : e.target.value});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        createOrder(order)
            .then(() => {setShow(true)})
        setOrder({email: '',
        dishWasher: '', 
        floorCleaner: '',
        disinfectant: '',
        glassCleaner: ''});
        setTimeout( () => {
            setShow(false)
        }, 2000);
    };
        
    return(
        <div className="container">
            <h2 className="title">Make an order</h2>

            <form onSubmit={onSubmitHandler} action="" className="orderForm">
                <div className="orderForm__email">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        required
                        value={order.email}
                        onChange={onChangeHandler}
                    />  
                </div>
                <div className="itemOrder">
                    <label htmlFor="">SUMA ULTRA PUR ECO L2 LIQ DETERGENT</label>
                    <input 
                        type="number"
                        name="dishWasher"
                        value={order.dishWasher}
                        onChange={onChangeHandler} />
                </div>
                <div className="divider"></div>
                <div className="itemOrder">
                    <label htmlFor="">LYRECO FLOOR CLEANER</label>
                    <input 
                        type="number"
                        name="floorCleaner"
                        value={order.floorCleaner}
                        onChange={onChangeHandler} />
                </div>
                <div className="divider"></div>
                <div className="itemOrder">
                    <label htmlFor="">SUMA BAC D10 DETERGENT DISINFECTANT</label>
                    <input 
                        type="number"
                        name="disinfectant"
                        value={order.disinfectant}
                        onChange={onChangeHandler} />
                </div>
                <div className="divider"></div>
                <div className="itemOrder">
                    <label htmlFor="">KIILTO WINDOWS SPRUIT</label>
                    <input 
                        type="number"
                        name="glassCleaner"
                        value={order.glassCleaner}
                        onChange={onChangeHandler} />
                </div>
                <div className="orderForm__footer">
                    <p className="total">
                        Total to pay without delivery: {(order.dishWasher*22.7 + order.floorCleaner*7.5 + order.disinfectant*20.1 + order.glassCleaner*32.1).toFixed(2)}€
                    </p>
                    <button className='button orderForm__btn'>Order</button>
                </div>
            </form>
            {show && <Modal />}
        </div>
    )
}

export default OrderForm;