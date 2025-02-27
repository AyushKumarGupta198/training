

async function getPost(id) {
    try {
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        return res.json();
    } catch (error) {
        return error.message;
    }
    
  }
  
  export default async function PostPage({ params }) {
    const { id } = await params
    const post = await getPost(id);
  
    return (
      <div className="container mx-auto p-6 mt-28">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
        <a href="/posts" className="text-blue-500 hover:underline mt-4 inline-block">
          ← Back to Posts
        </a>
      </div>
    );
  }