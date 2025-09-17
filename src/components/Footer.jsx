import React, { useState } from "react";
import "/src/styles/footer.css";

const categories = [
  { key: "", label: "Top News" },
  { key: "business", label:"Business" },
  { key: "entertainment", label:"Entertainment" },
  { key: "health", label:"Health" },
  { key: "science", label:"Science" },
  { key: "sports", label:"Sports" },
  { key: "technology", label:"Technology" },
];

const Footer = ({ onCategoryChange }) => {
  const [selectedKey, setSelectedKey] = useState("");

  const handleClick = (key) => {
    const newKey = key === selectedKey ? "" : key; 
    setSelectedKey(newKey);
    if (onCategoryChange) onCategoryChange(newKey);
  };

  return (
    <footer className="footer">
      <div className="footer-categories">
        <h4>Select a Category</h4>
        <div className="category-options">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              className={`category-btn ${selectedKey === key ? "active" : ""}`}
              onClick={() => handleClick(key)}
              aria-pressed={selectedKey === key}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <p>&copy; 2025 MyApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
