import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import webSiteReducer from "../slices/webSiteSlice";


const stringMiddlewere = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: { user:userReducer,webSite: webSiteReducer },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddlewere
        ),
    devTools: process.env.NODE_ENV !== "production",
})

export default store