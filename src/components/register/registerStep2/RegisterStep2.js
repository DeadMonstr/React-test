import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {AnimatePresence, motion} from "framer-motion";


import "./registerStep2.sass"
import {forTitle} from "../../../frame-motion";
import {useNavigate} from "react-router-dom";
import {useHttp} from "../../../hooks/http.hook";

const RegisterStep2 = ({updateUserData,userData}) => {

    const subject = [
        {
            name: "Ingliz tili",
            levels: [
                {
                    name : "Beginner"
                },
                {
                    name : "Elementry"
                },
                {
                    name : "Pre-IELTS"
                }
            ],
            testPassed: true
        },
        {
            name: "Rus tili",
            levels: [
                {
                    name : "Beginner"
                },
                {
                    name : "Elementry"
                },
                {
                    name : "Pre-IELTS"
                }
            ],
            testPassed: false

        },
        {
            name: "Matematika",
            testPassed: false

        },
        {
            name: "Ona tili",
            testPassed: false
        }
    ]

    const [subjects,setSubjects] = useState(subject)
    const [selectedSubjects,setSelectedSubjects] = useState([])



    const {
        register,
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    })

    const navigate = useNavigate()
    const {request} = useHttp()

    const onSubmit = (data,e) => {

        console.log('hello')
        console.log(data)
        const newData = {...userData,...data,selectedSubjects}
        console.log(newData)
        request("http://127.0.0.1:5000/register", "POST", JSON.stringify(newData))
            .then(res => console.log(res))



    }




    const onGetSubject = (subjectName) => {
        if (subjectName !== "Fan tanla") {
            const filteredSubjects = subjects.find(item => item.name === subjectName)
            setSubjects(subjects => {
                return subjects.map(item => {
                    if (item.name === subjectName) {
                        return {...item,disabled: true}
                    }
                    return item
                })
            })
            setSelectedSubjects([...selectedSubjects,filteredSubjects])
        }

    }

    const onDeleteSubject = (subjectName) => {
        if (subjectName !== "Fan tanla" ) {
            setSubjects(subjects => {
                return subjects.map(item => {
                    if (item.name === subjectName) {
                        return {...item,disabled: false}
                    }
                    return item
                })
            })
            setSelectedSubjects(selectedSubjects.filter(item => item.name !== subjectName))
        }
    }

    const renderOptions = (list) => {
        return (
            list.map((item,index) => {
                return (
                    <option  key={index} value={item.name}>{item.name}</option>
                )
            })
        )
    }


    const selectedSubjectLevel = (name,value) => {
        if (value !== "defaultLevel") {
            setSelectedSubjects(subjects => {
                return subjects.map(item => {
                    if (item.name === name) {
                        return {...item,selectedLevel: value}
                    }
                    return item
                })
            })
        }
    }

    const renderSubjects = (list) => {
        return (
            list.map((item,index) => {
                return (
                    <div

                        key={index}
                        className="subjects__item"
                    >
                        <div className="subjects__item-info">
                            <span>
                                {item.name}
                            </span>
                                <i
                                    onClick={() => onDeleteSubject(item.name)}
                                    className="fas fa-times"
                                />
                        </div>
                        {
                            item.levels ? (
                                <label htmlFor={item.name}>
                                    <span className="name-field">{item.name} Darajalari</span>
                                    <select
                                        id={item.name}
                                        className="input-fields"
                                        onChange={e => selectedSubjectLevel(item.name,e.target.value)}
                                    >
                                        <option value="defaultLevel">Darajani tanlang</option>
                                        {renderOptions(item.levels)}
                                    </select>
                                </label>
                            ) : null
                        }
                    </div>
                )
            })
        )
    }


    return (
        <motion.div className="register__step-2" >
            <motion.form
                variants={forTitle}
                initial="hidden"
                animate="show"
                exit="exit"
                action=""
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="eduCenLoc">
                    <span className="name-field">O'quv markazi joylashuvi</span>
                    <select
                        id="eduCenLoc"
                        className="input-fields "
                        {...register("eduCenLoc",{
                            required: "Iltimos to'ldiring"
                        })}
                    >
                        <option value="1">Xo'jakent</option>
                    </select>
                </label>
                {
                    selectedSubjects.length < 3 ? (
                        <label htmlFor="subjects">
                            <select
                                id="subjects"
                                className="input-fields"
                                onChange={e => onGetSubject(e.target.value)}
                            >
                                <option value="Fan tanla" >Fan tanlang</option>
                                {
                                    subjects.map((item,index) => {
                                        return (
                                            <option disabled={item.disabled}  key={index} value={item.name}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </label>
                    ) : null
                }

                <div className="subjects">
                    <h3>Tanlangan fanlar:</h3>
                    <div className="subjects__wrapper">
                        {renderSubjects(selectedSubjects)}
                    </div>
                </div>

                <label htmlFor="studyLang">
                    <span className="name-field">Ta'lim tili</span>
                    <select
                        id="studyLang"
                        className="input-fields "
                        {...register("studyLang",{
                            required: "Iltimos to'ldiring"
                        })}
                    >
                        <option value="Uzbek">Uzbek tili</option>
                        <option value="Rus">Rus tili</option>
                    </select>
                </label>
                <input className="input-submit" type="submit" value="Submit"/>
            </motion.form>
        </motion.div>
    );
};

export default RegisterStep2;