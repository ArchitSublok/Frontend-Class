import data from './data.json';
import './AllItem.css';

export default function AllItem({ searchQuery = '' }) {
  const query = searchQuery.trim().toLowerCase();

  const filteredProducts = data.products.filter((product) => {
    if (!query) return true;
    return (
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      (product.brand && product.brand.toLowerCase().includes(query))
    );
  });

  return (
    <div className="all-items-container">
      <h2>All Items ({filteredProducts.length})</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found matching "{searchQuery}".</p>
      ) : (
        <div className="all-items-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="item-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="item-thumbnail"
              />
              <h3 className="item-title">{product.title}</h3>
              {product.brand && (
                <p className="item-meta">
                  <strong>Brand:</strong> {product.brand}
                </p>
              )}
              <p className="item-meta">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="item-meta">
                <strong>Price:</strong> ${product.price}
              </p>
              <p className="item-meta">
                <strong>Rating:</strong> {product.rating} / 5
              </p>
              <p className="item-meta">
                <strong>Status:</strong> {product.availabilityStatus}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}