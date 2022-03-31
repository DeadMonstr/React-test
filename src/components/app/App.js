import React, {useEffect, useState} from "react";
import {Route, Routes, Navigate, useNavigate} from "react-router-dom";


import Platform from "../../pages/platform/Platform";
import PlatformContent from "../platform/platformContent/platformContent";
import Website from "../../pages/webSite/Website";
import Login from "../login/Login";
import Register from "../register/Register";
import RequireAuth from "../requireAuth/requireAuth";


import "./app.sass"
import {useDispatch} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {setUser} from "../../slices/userSlice";
import {useAuth} from "../../hooks/useAuth";

const ROLES = {
    User: "a21b32c43",
    Admin : "b55a77c90",
    Director: "c56b13a36",
    Programmer : "a20b03c13",
    Counter: "b00c11a31"
}


const App = () => {


    return (
        <Routes>
            <Route path="/"  element={<Website/>} />
            <Route path="/login" element={<Login/>}/>

            <Route path="register/*"  element={<Register/>}/>

            <Route element={<RequireAuth allowedRules={[ROLES.Admin,ROLES.User]}/>} >
                <Route path="/platform"  element={<Platform/>} >
                    <Route path="content" element={<PlatformContent/>}/>
                    <Route path="hi/*" element={<PlatformContent/>}/>
                </Route>
            </Route>

            <Route
                path="register"
                element={<Navigate to="/register/step_1" replace />}
            />

        </Routes>

    )
}

export default App