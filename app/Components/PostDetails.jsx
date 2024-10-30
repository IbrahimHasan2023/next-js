export default async function PostDetails({ PostID }) {
//   const PostID = params.PostID;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${PostID}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await responce.json();

  return (
    <div>
      <div
        style={{
          margin: "50px",
          padding: "50px",
          width: "100%",
          borderRadius: "5px",
          backgroundColor: "grey",
        }}
      >
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
      </div>
    </div>
  );
}
