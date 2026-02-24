function ProductCard({name, price, status, onToggle}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Status: {status}</p>
            <button onClick={onToggle}>Toggle Status</button>
        </div>
    );
}

export default ProductCard;