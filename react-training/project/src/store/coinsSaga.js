import {takeLatest,put,call} from 'redux-saga/effects';
import axios from 'axios';
import { fetchCoinRequest,fetchCoinSuccess,fetchCoinFailure } from './coinsSlice';


//function
const fetchRandomNumber = async () => {
    try {
      const response = await axios.get("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new");
      return parseInt(response.data, 10); 
    } catch (error) {
      console.error("Error fetching random number:", error);
    }
  };

//worker saga
function* fetchCoinSaga(){
    try{
        const res=yield call(fetchRandomNumber);
        yield put(fetchCoinSuccess(res));
    } catch(error){
        yield put(fetchCoinFailure(error.message))
    }
}

//watcher saga
export default function* CoinSaga(){
    yield takeLatest(fetchCoinRequest.type,fetchCoinSaga);
}