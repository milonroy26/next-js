export default async function getPostComments(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      // cache hbe na website update hle auto cache update hoia update view show korbe
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Error fetching posts");
  }
  return res.json();
}
