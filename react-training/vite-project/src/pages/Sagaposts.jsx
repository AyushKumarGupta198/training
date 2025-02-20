import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest,addPostRequest,deletePostRequest} from "../redux/postSlice";
import { v4 as uuidv4 } from "uuid";

function Sagaposts(){
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((state) => state.posts);
    const [newPost,setNewPost]=useState({title:"",body:""});

    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, [dispatch]);

    const handleAddPost=async()=>{
        const post={id:Date.now(),title:newPost.title,body:newPost.body}
        console.log(post.id)
        dispatch(addPostRequest(post));
        setNewPost({})
    };


    return (
        <div className='max-w-xl mx-auto p-4'>
            <div className='flex justify-center'>
                <input type='text' placeholder='Title...' className="border rounded" onChange={(e)=>setNewPost((prev)=>({...prev,title:e.target.value}))}/>
                <input type='text' placeholder='Body...' className="border rounded" onChange={(e)=>setNewPost((prev)=>({...prev,body:e.target.value}))}/>
                <button onClick={handleAddPost} disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">add Post</button>
            </div>
            {loading ? (<p className="text-center">Loading...</p>):(
                <div className="space-y-3">
                {posts.map((post) => (
                    <div key={post.id} className="p-3 border rounded shadow-md flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-sm text-gray-600">{post.body}</p>
                    </div>
                    <button onClick={() => dispatch(deletePostRequest(post.id))} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                        Delete
                    </button>
                    </div>
                ))}
                    </div>
            )}
        </div>
    )
}

export default Sagaposts;