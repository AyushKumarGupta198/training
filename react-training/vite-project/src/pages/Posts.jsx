import React from 'react'
import { useGetPostsQuery,useCreatePostsMutation } from '../services/jsonPlaceholderApi'
import { useState } from 'react';


function Posts() {
    const [newPost,setNewPost]=useState({title:"",body:"",id:99999})
    const {data,error,isLoading}=useGetPostsQuery();
    const [createPost,{isLoading:isCreating,error:createError}]=useCreatePostsMutation();
    if(isLoading)return <p>Loading...</p>
    if(error)return <p>ERROR...</p>
    if(createError)return <p>Error in creating post</p>

    const handleCreatePost=async()=>{
        await createPost(newPost)
    }
    
    
  return (
    <div className=''>
        <div className='flex justify-center'>
            <input type='text' placeholder='Title...' onChange={(e)=>setNewPost((prev)=>({...prev,title:e.target.value}))}/>
            <input type='text' placeholder='Body...' onChange={(e)=>setNewPost((prev)=>({...prev,body:e.target.value}))}/>
            <button onClick={handleCreatePost} disabled={isCreating}>Create Post</button>
        </div>
        <div className='text-center'>
            {data?.map((post)=><p>{post.title}</p>)}
        </div>
    </div>
  )
}

export default Posts