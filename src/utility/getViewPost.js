export default async function getViewPost(id) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   return res.json();
 }
 