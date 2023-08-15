const Comments = async ({ commentsPromise }) => {
  const comments = await commentsPromise;
  return (
    <div>
      <div className="py-4">
        <h1 className="font-bold text-lg">Post Commment</h1>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4 shadow-md p-4">
            <h2>
              <span> {comment.id} - </span> Email: {comment.email}{" "}
            </h2>
            <p> Message : {comment.body} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
