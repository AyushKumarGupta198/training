import {createSlice} from '@reduxjs/toolkit'

const initialState={
    posts:[],
    loading:false,
    error:null,
};

const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        fetchPostsRequest:(state)=>{state.loading=true},
        fetchPostsSuccess:(state,action)=>{
            state.loading=false,
            state.posts=action.payload;
        },
        fetchPostsFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },

        addPostRequest:(state)=>{state.loading=true},
        addPostSuccess:(state,action)=>{
            state.loading=false;
            state.posts.push({id: Date.now(),...action.payload});
        },
        addPostFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },

        deletePostRequest:(state) => {
            state.loading=true
          },
        deletePostSuccess:(state,action)=>{
            state.loading=false;
            state.posts=state.posts.filter(post=>post.id!==action.payload)
        },
        deletePostFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
});

export const {fetchPostsRequest,fetchPostsSuccess,fetchPostsFailure,addPostRequest,addPostSuccess,addPostFailure,deletePostRequest,deletePostSuccess,deletePostFailure}=postSlice.actions

export default postSlice.reducer;