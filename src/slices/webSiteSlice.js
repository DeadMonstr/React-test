import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    openModal: false,
    modalType: "event",
    modalEvent: {
        img: null,
        title: null,
        desc: null
    }
}


const webSiteSlice = createSlice({
    name: "webSite",
    initialState,
    reducers: {
        setEventModal(state,action) {
            state.openModal = true;
            state.modalType = "event";
            state.modalEvent.img = action.payload.img;
            state.modalEvent.title = action.payload.title;
            state.modalEvent.desc = action.payload.desc;

        },
        setOpenModal(state) {
            state.openModal = false;
        }
    }
})



const {actions,reducer} = webSiteSlice;

export default reducer

export const {
    setEventModal,setOpenModal
} = actions




