import React from 'react';
import '/src/styles/navbar.css';

const categories = [
  { key: "", label: "Top News" },
  { key: "business", label: "Business" },
  { key: "entertainment", label: "Entertainment" },
  { key: "health", label: "Health" },
  { key: "science", label: "Science" },
  { key: "sports", label: "Sports" },
  { key: "technology", label: "Technology" }
];

const Navbar = ({ category, setCategory }) => (
  <nav className="navbar">
    <ul className="nav-list">
      {categories.map(({ key, label }) => (
        <li key={key}>
          <button
            className={`nav-link ${category === key ? 'active' : ''}`}
            onClick={() => setCategory(key)}
            aria-current={category === key ? 'page' : undefined}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
