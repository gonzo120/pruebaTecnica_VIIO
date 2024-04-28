import { useProducts } from "../context/ProductsContext";
import { useEffect } from "react";

function ProductsPage() {
    const { getProducts, products } = useProducts();
    useEffect(() => {
        getProducts();
    }, []);

    if (!products || !products.carts) return <h1>No products</h1>;

    return (
        <div className="product-grid">
            {products.carts.map((cart) => (
                <div key={cart.id} className="cart">
                    <h1>Cart ID: {cart.id}</h1>
                    <div className="product-container">
                        {cart.products.map((product) => (
                            <div key={product.id} className="product-card">
                                <h2>{product.title}</h2>
                                <p>Price: ${product.price}</p>
                                <p>Total: ${product.total}</p>
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductsPage;
