import { useState } from "react";

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show, setHide] = useState(true);
  const [itemsInCart, setItemsInCart] = useState(0);

  const handleAddToCartClick = () => {
    setItemsInCart(itemsInCart + 1);
    alert(`you added ${itemsInCart + 1}`);
  };
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
          disabled={currentImageIndex >= product.imageUrls.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
          disabled={currentImageIndex <= 0}
        >
          Previous
        </button>
      </div>
      <h3>{product.name}</h3>
      <button onClick={() => setHide(show ? false : true)}>
        {" "}
        {show ? "Show Description" : "Hide Description"}
      </button>

      <p>{show ? "" : product.description}</p>

      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      <div>You order this item {itemsInCart} times</div>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
