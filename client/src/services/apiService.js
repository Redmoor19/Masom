import {useHttp} from '../hooks/useHttp.js';

const useApi = () => {

    const {error, loading, request, cleanError} = useHttp();
    const url = 'http://localhost:4000/api';

    const login = async (body) => {
        const res = await request(`${url}/authUser`,'POST', body);
        return res;
    }

    const getProducts = async () => {
        const res = await request(`${url}/products`);
        return res;
    }

    const createProduct = async (product) => {
        const res = await request(`${url}/createProduct`, 'POST', product, 
            {'Content-type':'application/json',
            'Authorization':`Brearer ${JSON.parse(localStorage.getItem('token'))}`});
        return res;
    }

    const deleteProduct = async (id) => {
        const body = JSON.stringify({_id: id})
        const res = await request(`${url}/deleteProduct`, 'DELETE', body,
            {'Content-type':'application/json',
            'Authorization':`Brearer ${JSON.parse(localStorage.getItem('token'))}`}
        );
        return res;
    }

    const createOrder = async (order) => {
        const body = JSON.stringify(order);
        const res = await request(`${url}/createOrder`, 'POST', body)
        return res;
    }

    const getOrders = async () => {
        const res = request(`${url}/getOrders`, 'GET', null, 
        {'Content-type':'application/json',
            'Authorization':`Brearer ${JSON.parse(localStorage.getItem('token'))}`});
        return res;
    }

    const deleteOrder = async (id) => {
        const body = JSON.stringify({_id: id});
        const res = request(`${url}/deleteOrder`, 'DELETE', body,
        {'Content-type':'application/json',
        'Authorization':`Brearer ${JSON.parse(localStorage.getItem('token'))}`});
        return res;
    }

    return {error, loading, getProducts, createProduct, deleteProduct, cleanError, createOrder, getOrders, deleteOrder, login}
}

export {useApi};