import Link from "next/link";

export default function ArticlePage() {
  return (
    <div className="main">
      <h1>Article Page</h1>
      <Link href="/Posts">
        <button className="btn">to posts page</button>
      </Link>
    </div>
  );
}
