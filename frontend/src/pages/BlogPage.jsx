import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  const { slug } = useParams();

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <h1>Nie znaleziono artykułu</h1>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "100px" }}>
      <img
        src={blog.image_url}
        alt={blog.title}
        style={{ width: "100%", marginBottom: "24px" }}
      />

      <p>
        {blog.category} • {blog.read_time} min czytania
      </p>

      <h1>{blog.title}</h1>

      <div style={{ whiteSpace: "pre-line" }}>
        {blog.content}
      </div>
    </div>
  );
}
