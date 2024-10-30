import PostDetails from "@/app/Components/PostDetails";
import { Suspense } from "react";

export default async function PostId({ params }) {
  const PostID = params.PostID;

  const Loadingjsx = (
    <div>
      <h1>Loading ...</h1>
    </div>
  );
  return (
    <div>
      <h1>PostId page</h1>
      <Suspense fallback={Loadingjsx}>
        <PostDetails PostID={PostID} />
      </Suspense>
    </div>
  );
}
