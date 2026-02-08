import { blogs } from "../data/blogs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogs.filter((article) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    return (
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query)
    );
  });

  return (
    <div data-testid="blog-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              BLOG
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
              Edukacja finansowa
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Artykuły, poradniki i analizy, które pomogą Ci lepiej zrozumieć
              świat finansów i podejmować świadome decyzje inwestycyjne.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Szukaj artykułów..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-sm border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-2">
                Brak artykułów
              </h3>
              <p className="text-slate-500">
                Nie znaleziono artykułów pasujących do Twojego wyszukiwania.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="group">
                  <Link to={`/blog/${article.slug}`}>
                    <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-5">
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-slate-100 text-slate-600 rounded-sm">
                        {article.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock className="w-3 h-3" />
                        {article.read_time} min
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-semibold text-[#0A192F] mb-2 group-hover:text-[#D4AF37]">
                      {article.title}
                    </h2>

                    <p className="text-slate-600 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 flex items-center text-sm font-medium">
                      Czytaj dalej
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-[#0A192F] rounded-sm p-10 md:p-16 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Chcesz więcej wiedzy?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Umów się na spotkanie, a opowiem Ci więcej o strategiach
              budowania majątku dopasowanych do Twojej sytuacji.
            </p>
            <Link to="/umow-spotkanie">
              <Button className="bg-[#D4AF37] text-[#0A192F] rounded-sm px-8 py-6 font-semibold">
                Umów bezpłatną konsultację
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
