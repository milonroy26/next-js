import Navbar from "@/components/Navbar";
import getAllPosts from "@/utility/getAllPosts";
import getViewPost from "@/utility/getViewPost";

const page = async ({params}) => {
  const id = params.id;
  const post = await getViewPost(id);
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-6 px-32">
        <h2> {post.title} </h2>
        <p> {post.body} </p>
      </div>
    </div>
  );
};
export default page;

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
      id: "" + post.id,
  }));
}

