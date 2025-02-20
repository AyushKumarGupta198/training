import {takeEvery,call,put} from 'redux-saga/effects'
import { fetchPosts,addPost,deletePost } from '../services/Api'
import { fetchPostsRequest,fetchPostsSuccess,fetchPostsFailure,
    addPostRequest,addPostSuccess,addPostFailure,deletePostRequest,deletePostSuccess,deletePostFailure} from './postSlice'

 function* handleFetchPosts(){
    try{
        const posts=yield call(fetchPosts);
        yield put(fetchPostsSuccess(posts));
    }catch(error){
        yield put(fetchPostsFailure(error.message));
    }
 };

 function* handleAddPost(action){
    try {
        const newPost = yield call(addPost, action.payload);
        yield put(addPostSuccess(newPost));
    } catch (error) {
        yield put(addPostFailure(error.message));
    }
 };

 function* handleDeletePost(action) {
    try {
      yield call(deletePost, action.payload);
      yield put(deletePostSuccess(action.payload));
      console.log(action.payload);
    } catch (error) {
      yield put(deletePostFailure(error.message));
    }
  };

  export function* postSaga(){
    yield takeEvery(fetchPostsRequest.type,handleFetchPosts);
    yield takeEvery(addPostRequest,handleAddPost);
    yield takeEvery(deletePostRequest,handleDeletePost);
  };