function ProductCard({ product }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />
        <h3>{product.title}</h3>
        <p>{product.description.substring(0, 60)}...</p>
        <p>⭐ {product.rating}</p>
      </div>
    );
  }
  
  export default ProductCard;