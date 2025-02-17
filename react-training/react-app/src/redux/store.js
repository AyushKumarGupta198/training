import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk'
import themeReducer from './themeSlice'
import jokeReducer from './jokeSlice'
import createSagaMiddleware from 'redux-saga';
import userReducer from './userSlice';
import watchFetchUserRequest from './userSaga';

const sagaMiddleware = createSagaMiddleware();


export const store=configureStore({
    reducer: {
        theme: themeReducer,
        joke:jokeReducer,
        user: userReducer,
      },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({ thunk: true }).concat(thunk).concat(sagaMiddleware),
})

sagaMiddleware.run(watchFetchUserRequest);

export default store;