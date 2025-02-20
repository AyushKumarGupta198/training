import {takeLatest,put,call} from 'redux-saga/effects';
import axios from 'axios';
import { fetchJokeRequest,fetchJokeSuccess,fetchJokeFailure } from './jokeSlice';

//function
function fetchJokeAPI(){
    return axios.get("https://official-joke-api.appspot.com/random_joke")
}

//worker saga
function* fetchJokeSaga(){
    try{
        const res=yield call(fetchJokeAPI);
        const joke=`${res.data.setup} - ${res.data.punchline}`;
        yield put(fetchJokeSuccess(joke));
    } catch(error){
        yield put(fetchJokeFailure(error.message))
    }
}

//watcher saga
export default function* jokeSaga(){
    yield takeLatest(fetchJokeRequest.type,fetchJokeSaga);
}