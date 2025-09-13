import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import verifyReducer from "../features/auth/verifySlice";
import loginReducer from "../features/auth/loginSlice";
import profileReducer from "../features/auth/meSlice";

const store = configureStore({
    reducer: {
        register: registerReducer,
        verify: verifyReducer,
        login: loginReducer,
        profile: profileReducer
    }
})

export default store