import Navbar from "@/components/Navbar";
import getAllPosts from "@/utility/getAllPosts";
import Link from "next/link";

const page = async () => {
  const posts = await getAllPosts();
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-5 px-10">
        {posts.map((post) => (
          <h1 className="shadow-md mb-4 p-2" key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.id} - {post.title}
            </Link>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default page;
