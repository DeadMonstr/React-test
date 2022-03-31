import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useHttp} from "../../../hooks/http.hook";
import {useDispatch} from "react-redux";
import {setUser} from "../../../slices/userSlice";
import {useForm} from "react-hook-form";
import {motion} from "framer-motion";


import "./registerStep1.sass"
import ErrorMessage from "../../error/errorMessage/ErrorMessage";
import {forTitle} from "../../../frame-motion";

const RegisterStep1 = ({updateUserData,userData}) => {


    const year = [
        {
            num: "2023"
        },
        {
            num: "2022"
        },
        {
            num: "2021"
        },
        {
            num: "2020"
        },
        {
            num: "2019"
        },
        {
            num: "2018"
        },
        {
            num: "2017"
        },
        {
            num: "2016"
        },
        {
            num: "2015"
        },
        {
            num: "2014"
        },
        {
            num: "2013"
        },
        {
            num: "2012"
        },
        {
            num: "2011"
        },
        {
            num: "2010"
        },
        {
            num: "2009"
        },
        {
            num: "2008"
        },
        {
            num: "2009"
        },
        {
            num: "2007"
        },
        {
            num: "2006"
        },
        {
            num: "2005"
        },
        {
            num: "2004"
        },
        {
            num: "2003"
        },
        {
            num: "2002"
        },
        {
            num: "2001"
        },
        {
            num: "2000"
        },
        {
            num: "1999"
        },
        {
            num: "1998"
        },
        {
            num: "1997"
        },
        {
            num: "1996"
        },
        {
            num: "1995"
        },
        {
            num: "1994"
        },
        {
            num: "1993"
        },
        {
            num: "1992"
        },
        {
            num: "1991"
        },
        {
            num: "1990"
        },
        {
            num: "1989"
        },
        {
            num: "1988"
        },
        {
            num: "1987"
        },
        {
            num: "1986"
        },
        {
            num: "1985"
        },
        {
            num: "1984"
        },
        {
            num: "1983"
        },
        {
            num: "1982"
        },
        {
            num: "1981"
        },
        {
            num: "1980"
        },
        {
            num: "1979"
        },
        {
            num: "1978"
        },
        {
            num: "1977"
        },
        {
            num: "1976"
        },
        {
            num: "1975"
        },
        {
            num: "1974"
        },
        {
            num: "1973"
        },
        {
            num: "1972"
        },
        {
            num: "1971"
        },
        {
            num: "1970"
        },
    ]
    const month = [
        {
            num: "01"
        },
        {
            num: "02"
        },
        {
            num: "03"
        },
        {
            num: "04"
        },
        {
            num: "05"
        },
        {
            num: "06"
        },
        {
            num: "07"
        },
        {
            num: "08"
        },
        {
            num: "09"
        },
        {
            num: "10"
        },
        {
            num: "11"
        },
        {
            num: "12"
        }
    ]
    const days = [
        {
            num: "01"
        },
        {
            num: "02"
        },
        {
            num: "03"
        },
        {
            num: "04"
        },
        {
            num: "05"
        },
        {
            num: "06"
        },
        {
            num: "07"
        },
        {
            num: "08"
        },
        {
            num: "09"
        },
        {
            num: "10"
        },
        {
            num: "11"
        },
        {
            num: "12"
        },
        {
            num: "13"
        },
        {
            num: "14"
        },
        {
            num: "15"
        },
        {
            num: "16"
        },
        {
            num: "17"
        },
        {
            num: "18"
        },
        {
            num: "19"
        },
        {
            num: "20"
        },
        {
            num: "21"
        },
        {
            num: "22"
        },
        {
            num: "23"
        },
        {
            num: "24"
        },
        {
            num: "25"
        },
        {
            num: "26"
        },
        {
            num: "27"
        },
        {
            num: "28"
        },
        {
            num: "29"
        },
        {
            num: "30"
        },
        {
            num: "31"
        }
    ]

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
        clearErrors,
        setError
    } = useForm({
        mode: "onBlur"
    })



    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")


    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)



    const [activeError,setActiveError] = useState(false)

    const {request} = useHttp()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const onSubmit = (data,e) => {
        e.preventDefault()
        updateUserData(data)
        navigate("/register/step_2")

        // request("http://127.0.0.1:5000/login","POST", JSON.stringify(user))
        //     .then(res => {
        //         dispatch(setUser({
        //             id: res.id,
        //             username: res.username,
        //             role: res.role,
        //             token: res.access_token
        //         }))
        //         setUsername("")
        //         setPassword("")
        //         navigate("/platform")
        //     })
        //     .catch(setActiveError(true))

    }

    const checkUsername = (name) => {
        // console.log(name)
        // if (name === "suka") {
        //     setError('username', {
        //         type: "manual",
        //         message: "clear suka"
        //     })
        // } else {
        //     clearErrors()
        // }

        // request("http://127.0.0.1:5000/login","POST", JSON.stringify(name))
        //     .then(res => {
        //         dispatch(setUser({
        //             id: res.id,
        //             username: res.username,
        //             role: res.role,
        //             token: res.access_token
        //         }))
        //         navigate("/platform")
        //     })
        //     .catch(() => {
        //         // setError('username', {
        //         //     type: "manual",
        //         //     message: "clear suka"
        //         // })
        //         // setActiveError(true)
        //     })

    }

    useEffect(() => {
        if (password !== confirmPassword || confirmPassword !== password) {
            setError('confirmPassword', {
                type: "manual",
                message: "parollar har xil"
            })
            setActiveError(true)
        } else {
            // clearErrors("confirmPassword")
            setActiveError(false)
        }
    },[password, confirmPassword, setError, clearErrors])



    const classShowPassword = showPassword ?  "fas fa-eye" : "fas fa-eye-slash"
    const classShowConfirmPassword = showConfirmPassword ?  "fas fa-eye" : "fas fa-eye-slash"

    const typePassword = showPassword ? "text" : "password"
    const typeConfirmPassword = showConfirmPassword ? "text" : "password"


    const renderOptions = (list) => {
        return (
            list.map((item,index) => {
                return (
                    <option key={index} value={item.num}>{item.num}</option>
                )
            })
        )
    }

    return (
        <motion.div className="register__step-1">
            <ErrorMessage activeError={activeError}>
                Parollar bir biriga mos emas
            </ErrorMessage>
            <motion.form
                variants={forTitle}
                initial="hidden"
                animate="show"
                exit="exit"
                action=""
                onSubmit={handleSubmit(onSubmit)}
            >

                <h1 className="title">Register</h1>
                <label htmlFor="username">
                    <span className="name-field">Username</span>
                    <input
                        defaultValue={""}
                        id="username"
                        className="input-fields"
                        value={userData?.username}
                        {...register("username",{
                            required: "Iltimos to'ldiring",
                            onBlur: event => checkUsername(event.target.value)
                        })}
                    />
                    {
                        errors?.username &&
                        <span className="error-field">
                            {errors?.username?.message}
                        </span>
                    }
                </label>
                <label htmlFor="name">
                    <span className="name-field">Ism</span>
                    <input
                        defaultValue={""}
                        id="name"
                        className="input-fields "
                        {...register("name",{
                            required: "Iltimos to'ldiring",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "Ism faqat harflardan iborat bo'lishi kerak"
                            },
                        })}
                    />
                    {
                        errors?.name &&
                        <span className="error-field">
                            {errors?.name?.message}
                        </span>
                    }
                </label>
                <label htmlFor="surname">
                    <span className="name-field">Familiya</span>
                    <input
                        defaultValue={""}
                        id="surname"
                        className="input-fields"
                        {...register("surname",{
                            required: "Iltimos to'ldiring",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "Familya faqat harflardan iborat bo'lishi kerak"
                            },
                        })}
                    />
                    {
                        errors?.surname &&
                        <span className="error-field">
                            {errors?.surname?.message}
                        </span>
                    }
                </label>
                <label htmlFor="fatherName">
                    <span className="name-field">Otasining ismi</span>
                    <input
                        defaultValue={""}
                        id="fatherName"
                        className="input-fields "
                        {...register("fatherName",{
                            required: "Iltimos to'ldiring",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "Otaning ismi faqat harflardan iborat bo'lishi kerak"
                            },
                        })}
                    />
                    {
                        errors?.fatherName &&
                        <span className="error-field">
                            {errors?.fatherName?.message}
                        </span>
                    }
                </label>

                <h3>Tug'ulgan sana</h3>
                <div className="birth">

                    <label htmlFor="birthDay" className="selectLabel">
                        <span className="name-field">Kun</span>
                        <select
                            name="birthDay"
                            id="birthDay"
                            {...register("birthDay", { required: true })}
                        >
                            {
                                renderOptions(days)
                            }
                        </select>
                    </label>
                    <label htmlFor="birthMonth" className="selectLabel">
                        <span className="name-field">Oy</span>
                        <select
                            name="birthMonth"
                            id="birthMonth"
                            {...register("birthMonth", { required: true })}
                        >
                            {
                                renderOptions(month)
                            }
                        </select>
                    </label>
                    <label htmlFor="birthYear" className="selectLabel">
                        <span className="name-field">Yil</span>
                        <select
                            name="birthYear"
                            id="birthYear"
                            {...register("birthYear", { required: true })}
                        >
                            {
                                renderOptions(year)
                            }
                        </select>
                    </label>
                </div>


                <label htmlFor="phone">
                    <span className="name-field">Telefon raqam</span>
                    <input
                        defaultValue={""}
                        id="phone"
                        className="input-fields "
                        {...register("phone",{
                            required: "Iltimos to'ldiring",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Telefon raqami sonlar va maxsus belgilardan iborat bo'lishi kerak"
                            },
                        })}
                    />
                    {
                        errors?.phone &&
                        <span className="error-field">
                            {errors?.phone?.message}
                        </span>
                    }
                </label>
                <label htmlFor="phoneParent">
                    <span className="name-field">Ota-onaning telefon raqami</span>
                    <input
                        defaultValue={""}
                        id="phoneParent"
                        className="input-fields "
                        {...register("phoneParent",{
                            required: "Iltimos to'ldiring",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Telefon raqami sonlar va maxsus belgilardan iborat bo'lishi kerak"
                            },
                        })}
                    />
                    {
                        errors?.phoneParent &&
                        <span className="error-field">
                            {errors?.phoneParent?.message}
                        </span>
                    }
                </label>
                <label htmlFor="password">
                    <div>
                        <span className="name-field">Parol</span>
                        <input
                            defaultValue={""}
                            id="password"
                            type={typePassword}
                            className="input-fields "
                            {...register("password",{
                                minLength: {
                                    value: 8,
                                    message : "Parolingiz 8 ta dan kam bo'lmasligi kerak"
                                },
                                required: "Iltimos to'ldiring",
                                onChange: event => setPassword(event.target.value)
                            })}
                        />
                        <i className={classShowPassword} onClick={() => setShowPassword(!showPassword)}/>
                    </div>
                    {
                        errors?.password &&
                        <span className="error-field">
                            {errors?.password?.message}
                        </span>
                    }
                </label>
                <label htmlFor="confirmPassword">
                    <div>
                        <span className="name-field">Parolni qaytaring</span>
                        <input
                            defaultValue={""}
                            id="confirmPassword"
                            type={typeConfirmPassword}
                            className="input-fields"
                            {...register("confirmPassword",{
                                minLength: {
                                    value :8,
                                    message : "Parolingiz 8 ta dan kam bo'lmasligi kerak"
                                },
                                required: "Iltimos to'ldiring",
                                onChange: event => setConfirmPassword(event.target.value)
                            })}
                        />
                        <i className={classShowConfirmPassword} onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>
                    </div>
                    {
                        errors?.confirmPassword &&
                        <span className="error-field">
                            {errors?.confirmPassword?.message}
                        </span>
                    }
                </label>

                <label htmlFor="comment">
                    <span className="name-field">Qo'shimcha ma'lumot (shart emas)</span>
                    <textarea

                        id="comment"
                        {...register("comment", {required: true})}
                    />
                </label>
                <input disabled={activeError}  className="input-submit" type="submit" value="Next"/>

            </motion.form>
        </motion.div>

    );
};

export default RegisterStep1;