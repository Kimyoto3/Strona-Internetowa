import { blogs } from "../data/blogs";

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <h1>BLOG TEST</h1>
      <pre>{JSON.stringify(blogs, null, 2)}</pre>
    </div>
  );
}
