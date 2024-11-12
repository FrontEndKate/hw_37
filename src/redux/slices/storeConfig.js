import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./userSlice";
import {statsReduser} from "./statsSlice";
import {quizReducer} from "./quizSlice";

export const store = configureStore(
    {
        reducer: {
            user: userReducer,
            stats: statsReduser,
            quiz: quizReducer
        }
    }
)