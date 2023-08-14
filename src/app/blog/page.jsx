import Navbar from "@/components/Navbar";
import getAllPosts from "@/utility/getAllPosts";

const page = async () => {
  const posts = await getAllPosts();
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-5">
        {posts.map((post) => (
          <h1 key={post.id}> {post.title} </h1>
        ))}
      </div>
    </div>
  );
};

export default page;
