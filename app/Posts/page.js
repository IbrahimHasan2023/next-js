import Link from "next/link";
import Todo from "../Components/todo";
import PostId from "./[PostID]/page";

export default async function PostsPage() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await responce.json();
  const Postsjsx = posts.map((posts) => {
    return (
      <Link href={`/Posts/${posts.id}`} style={{ width: "70%" }}>
        <div
          style={{
            padding: "50px",
            width: "100%",
            borderRadius: "5px",
          }}
        >
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="main">
      <h1>Posts page</h1>

      {/* posts */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {Postsjsx}
      </div>

      {/* posts */}

      {/* <div>
        <Todo />
      </div> */}

      <Link href="/Articles">
        <button className="btn">to ArticlePage</button>
      </Link>
    </div>
  );
}
