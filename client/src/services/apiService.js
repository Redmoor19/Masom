import {useHttp} from '../hooks/useHttp.js';

const useApi = () => {

    const {error, loading, request, cleanError} = useHttp();

    const login = async (body) => {
        const res = await request('http://localhost:4000/api/authUser','POST', body)
        return res;
    }

    return {error, loading, cleanError, login}
}

export {useApi};