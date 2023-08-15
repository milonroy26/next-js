import Navbar from "@/components/Navbar";
import getAllPosts from "@/utility/getAllPosts";
import getPostComments from "@/utility/getPostComments";
import getViewPost from "@/utility/getViewPost";
import { Suspense } from "react";
import Comments from "@/components/Comments";

// Dainamic Params: je id ta pabe na sei error page na nia 404 page nia jabe.
export const dynamicParams = false;

const page = async ({ params }) => {
  const id = params.id;
  // get view post
  const post = await getViewPost(id);
  // get comment
  const commentsPromise = getPostComments(id);

  // delay(2000);
  // Parallel Data Fetching
  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-6 px-32">
        <h2> {post.title} </h2>
        <p> {post.body} </p>

        <Suspense fallback={<h3>Loadding Comment...</h3>}>
          <Comments commentsPromise={commentsPromise}></Comments>
        </Suspense>
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
