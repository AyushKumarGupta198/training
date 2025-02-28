import Link from "next/link";

async function getPosts() {
    try {
        const res = await fetch("https://dummyjson.com/posts?limit=9",{ next: { revalidate: 3600 } });
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
    } catch (error) {
        return error.message;
    }
}

export default async function PostsPage() {
  const { posts } = await getPosts();

  return (
    <div className="container mx-auto mt-28 p-6 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts && posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read More...
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}