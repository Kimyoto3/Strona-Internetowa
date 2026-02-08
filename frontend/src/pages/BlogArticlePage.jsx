import { useParams, Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BlogArticlePage() {
  const { slug } = useParams();

  const article = blogs.find((blog) => blog.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Artykuł nie znaleziony</h1>
        <Link to="/blog" className="text-blue-600 underline">
          Wróć do bloga
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-slate-500 mb-6 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć do bloga
          </Link>

          <Badge className="mb-4">{article.category}</Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Clock className="w-4 h-4" />
            {article.read_time} min czytania
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-slate">
        {article.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </article>
  );
}
