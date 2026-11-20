import './Navbar.css';


export function Navbar({ searchQuery, onSearchChange }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">ShopSmart</div>

      <ul className="nav-links">
        <li className="nav-item">All Items</li>
        <li className="nav-item">Category</li>
        <li className="nav-item">Sort</li>
      </ul>

      <div className="nav-search-group">
        <input
          type="search"
          className="nav-search-input"
          placeholder="Search products, brand, category..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search products"
        />
        {searchQuery && (
          <button
            type="button"
            className="nav-clear-btn"
            onClick={() => onSearchChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      
    </nav>
  );
}