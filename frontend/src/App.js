import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

// Pages
import HomePage from "@/pages/HomePage";
import AboutMePage from "@/pages/AboutMePage";
import AboutCompanyPage from "@/pages/AboutCompanyPage";
import BookMeetingPage from "@/pages/BookMeetingPage";
import BlogPage from "@/pages/BlogPage";
import BlogArticlePage from "@/pages/BlogArticlePage";
import ContactPage from "@/pages/ContactPage";

// Layout
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-mnie" element={<AboutMePage />} />
            <Route path="/o-firmie" element={<AboutCompanyPage />} />
            <Route path="/umow-spotkanie" element={<BookMeetingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
