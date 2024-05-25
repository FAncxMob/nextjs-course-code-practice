import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>BlogPostPage Page</h1>
    </div>
  );
};

export default BlogPostPage;
