import data from "./data";


function App() {
  return (
    <div className="App">
      <header >
        <a href="/">
          La tiendita
        </a>
      </header>
      <main>
        <h1>Productos destacados</h1>
        <div className="products">
          {
            data.products.map(product=>(
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name}/>
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <a href={`/product/${product.slug}`}>
                    <p> <strong>{product.price}</strong></p>
                  </a>
                    <button>Agregar al carrito</button>
                  
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
