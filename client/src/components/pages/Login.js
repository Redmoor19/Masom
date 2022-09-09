import React, { useState } from "react";
import {Formik} from 'formik';
import { useApi } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import useDidMountEffect from "../../hooks/useComponentDidUpdate";
import Spinner from '../Spinner/Spinner';

import '../../styles/loginForm.scss';

const Login = () => {

    const {error, loading, login, cleanError} = useApi();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const redirect = (token) => {
        localStorage.setItem("token", JSON.stringify(token));
        navigate('/admin');
    }

    useDidMountEffect( () => {
        cleanError();
        login(JSON.stringify(data))
            .then(redirect);
    }, [data])

    const errorMessage = error ? <div className="error">You are not allowed to login</div> : null

    return(
        <div className="container">
            {errorMessage}
            {loading? <Spinner size={'auto'}/> : <Formik
                initialValues={{name: '', password: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Name is required'
                    }
                    if (!values.password) {
                        errors.password = 'Password is required'
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    setData(values);
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="loginForm__item">
                        <label htmlFor="name" className="loginForm__label">Name</label>
                        <input
                            className="loginForm__input"
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                    </div>
                    <div className="loginForm__item">
                        <label className="loginForm__label">Password</label>
                        <input
                            className="loginForm__input"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                    </div>
                    <button 
                    className="loginForm__button"
                    type="submit"
                    >
                        Submit
                    </button>
                    </form>
                )}
            </Formik>}
        </div>
    )
}

export default Login;