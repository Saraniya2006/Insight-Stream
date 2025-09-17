import React, { useState, useEffect } from "react";
import axios from "axios";
import '/src/styles/home.css';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SubscriptionBox from "../components/SubscriptionBox";
import Footer from "../components/Footer";
import Ads from "../components/Ads";

const categories = [
  { key: "", label: "Top News" },
  { key: "business", label: "Business" },
  { key: "entertainment", label: "Entertainment" },
  { key: "health", label: "Health" },
  { key: "science", label: "Science" },
  { key: "sports", label: "Sports" },
  { key: "technology", label: "Technology" },
];

const PAGE_SIZE = 10;

export default function Home() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiKey = "247e5259d85d471a81d5c8352a72de6d";

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&page=${page}&pageSize=${PAGE_SIZE}&language=en`;

        if (searchQuery.trim()) {
          url += `&q=${encodeURIComponent(searchQuery)}`;
        }

        if (category) {
          url += `&category=${category}`;
        }

        const response = await axios.get(url);

        setNews(response.data.articles || []);
        setTotalResults(response.data.totalResults || 0);

      } catch (error) {
        console.error("Error fetching news:", error.response?.data || error.message);
        setNews([]);
        setTotalResults(0);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category, page, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(totalResults / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [category, searchQuery]);

  return (
    <div className="page-container">
      <Navbar categories={categories} category={category} setCategory={setCategory} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <h2 className="heading">
        {searchQuery
          ? `Search results for "${searchQuery}"`
          : category
            ? categories.find((c) => c.key === category)?.label
            : "Top News"}
      </h2>

      {loading && <p className="centre-text">Loading news...</p>}

      {!loading && news.length === 0 && (
        <p className="centre-text">
          {searchQuery ? "No news found for that topic." : "No news available."}
        </p>
      )}

      {!loading &&
        news.map((article, idx) => (
          <div
            key={idx}
            className="news-card"
          >
            {article.urlToImage && (
              <img className="news-image" src={article.urlToImage} alt={article.title} />

            )}

            <h3 className="news-title">{article.title}</h3>
            {article.description && (
              <p className="news-description">{article.description}</p>
            )}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              Read more
            </a>
          </div>
        ))}

      <div className="pagination">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="pagination-btn"
        >
          Previous
        </button>
        <span className="pagination-info">
          {" "}
          Page {page} of {totalPages}{" "}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
      <div className="ad-wrapper">
        <Ads />
      </div>
      <SubscriptionBox />
      <Footer onCategoryChange={setCategory} />

    </div>
  );
}

