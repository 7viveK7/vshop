import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"


const store = configureStore({
    reducer: {
        authSlice: authSlice
    }
})

export default store