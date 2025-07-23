export default function Books({ book, addToCart }) {

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/public/img/${book.image}.jpg`}
          alt="imagen libro"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{book.name}</h3>
        <p>{book.description}</p>
        <p className="fw-black text-primary fs-3">{book.price}€</p>
        <button type="button" className="btn btn-dark w-100" onClick={() => addToCart(book)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
