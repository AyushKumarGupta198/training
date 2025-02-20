import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { jsonPlaceholderApi } from "../services/jsonPlaceholderApi";
import jokeReducer from './jokeSlice'
import jokeSaga from "./jokeSaga";
import createSagaMiddleware from "redux-saga";
import { postSaga } from "./postSaga";
import postReducer from './postSlice';

const sagaMiddleware=createSagaMiddleware();

export const store=configureStore({
    reducer:{
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
        jokes:jokeReducer,
        posts:postReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({ thunk: false }).concat(jsonPlaceholderApi.middleware).concat(sagaMiddleware),
});

sagaMiddleware.run(jokeSaga)
sagaMiddleware.run(postSaga)
setupListeners(store.dispatch);