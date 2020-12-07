import data from "./data";
console.log(data.products);
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/{${product._id}`}>
                <img
                  className="img medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <a href="proudct.html">
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">
        <p>All Rights Reserved 2021</p>
      </footer>
    </div>
  );
}

export default App;
