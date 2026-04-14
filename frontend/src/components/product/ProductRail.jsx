import ProductCard from './ProductCard.jsx'

function ProductRail({ products }) {
  return (
    <div className="product-rail">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductRail
