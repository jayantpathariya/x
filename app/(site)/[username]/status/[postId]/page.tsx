import { PostDetail } from "@/components/post-detail/post-detail";
import { PostDetailHeader } from "@/components/post-detail/post-detail-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "John Doe on X: 'Post Title'",
};

const PostDetailPage = () => {
  return (
    <div className="mb-16">
      <PostDetailHeader />
      <PostDetail />
    </div>
  );
};

export default PostDetailPage;
