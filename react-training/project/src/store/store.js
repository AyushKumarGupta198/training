import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import coinReducer from './coinsSlice';
import coinSaga from './coinsSaga';
import loadingReducer from './loadingSlice';

const sagaMiddleware=createSagaMiddleware()

export const store=configureStore({
    reducer:{
        coins:coinReducer,
        loadingPage:loadingReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(coinSaga);