import React, {useEffect, useState} from 'react';

import "./login.sass"
import {useHttp} from "../../hooks/http.hook";
import {Link, useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
import {setUser} from "../../slices/userSlice";
import {fetchUser} from "../../slices/userSlice";

import Logo from "../../assets/logo/Gennis logo.png"

import ErrorMessage from "../error/errorMessage/ErrorMessage";
import WebSiteLoader from "../loader/webSiteLoader/WebSiteLoader";
import DefaultLoader from "../loader/defaultLoader/DefaultLoader";


const Login = () => {

    const {userLoadingStatus} = useSelector(state => state.user)

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState('')

    const [showPassword,setShowPassword] = useState(false)

    const [activeError,setActiveError] = useState(false)
    const [messageError,setMessageError] = useState(null)


    const navigate = useNavigate()
    const dispatch = useDispatch()


    const onSubmit = async (e) => {
        e.preventDefault()

        const user = {
            username: username,
            password: password
        }

        await dispatch(fetchUser(user))

        // await navigate('/platform')

        await setUsername("")
        await setPassword("")

    }

    useEffect(() =>{
        if (userLoadingStatus === "error") {
            setActiveError(true)
            setMessageError("Parol yoki Username hato berilgan")
        } else if (userLoadingStatus === "success") {
            navigate('/platform')
        }else if (userLoadingStatus === "loading") {
            return <WebSiteLoader/>
        }
    },[userLoadingStatus])

    const classShowPassword = showPassword ?  "fas fa-eye" : "fas fa-eye-slash"
    const typePassword = showPassword ? "text" : "password"




    const renderForm = () => {
        if (userLoadingStatus === "loading") {
            return (
                <DefaultLoader/>
            )
        } else {
            return (
                <>
                    <h1 className="title">Login</h1>
                    <label htmlFor="username">
                        <span className="name-field">Username</span>
                        <input
                            id="username"
                            type="text"
                            name="login"
                            className="input-fields "
                            onChange={(e) => {
                                setUsername(e.target.value)
                                setActiveError(false)
                            }}
                            value={username}
                        />
                    </label>
                    <label htmlFor="password">
                        <span className="name-field">Password</span>
                        <input
                            id="password"
                            type={typePassword}
                            name="password"
                            className="input-fields"
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setActiveError(false)
                            }}
                            value={password}
                        />
                        <i className={classShowPassword} onClick={() => setShowPassword(!showPassword)}/>
                    </label>
                    <input type="submit" className="input-submit" value="Submit"/>

                    <div className="link__register">
                        Agar accountingiz mavjud bolmasa:
                        <span>
                        <Link to="/register">
                            Register
                        </Link>
                    </span>
                    </div>
                </>


            )
        }
    }

    return (
        <div className="login">
            <ErrorMessage activeError={activeError}>
                {messageError}
            </ErrorMessage>
            <Link to="/">
                <img className="login__logo" src={Logo} alt="Logo"/>
            </Link>

            <form action="" onSubmit={onSubmit}>
                {renderForm()}
            </form>

        </div>
    );
};

export default Login;