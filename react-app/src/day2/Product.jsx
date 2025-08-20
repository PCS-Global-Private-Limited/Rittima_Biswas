import { useState } from "react"
import ProductCard from "./ProductCard"
import { productData } from "./db"

const Product = ({name}) => {

  const [show, setShow] = useState(null)
  const close=()=>setShow(null)
  const view = (product) => setShow(product);
  const [filter, setFilter] = useState("")
  const [category, setCategory] = useState("")

  function user({ login }) {
  return (
    <h1>{login ? `Welcome back, ${name}!` : "Please log in."}</h1>
  );
}


  const sorted=[...productData].filter((item)=>{
    //if loop
    if (!category) return true
    return item.category.toLowerCase() === category.toLowerCase()
  })

  if (filter === "lowHigh") sorted.sort((x, y) => x.price - y.price)
  if (filter === "highLow") sorted.sort((x, y) => y.price - x.price)
  
  return (
    <div className="container">
      <div className="container my-4">
  <h1 className="mb-4">Electronics Products {name || "Guest"}</h1>

  <div className="row g-3 align-items-center">
    <div className="col-md-3">
      <select className="form-select" name="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="lowHigh">Low to High</option>
        <option value="highLow">High to Low</option>
      </select>
    </div>

    <div className="col-md-3">
      <select className="form-select" name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Category</option>
        <option value="mobile">Mobile</option>
        <option value="speaker">Speaker</option>
      </select>
    </div>
  </div>
</div>


      <table className="table">
        <thead>
          <tr className="table-warning">
            <th >ID</th>
            <th >Product Name</th>
            <th >Product Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            sorted.map ((item) => (
              <ProductCard key={item.id} 
                id={item.id} 
                name={item.name} 
                price={item.price} 
                view={() => view(item)} 
              />
            ))
          }
        </tbody>
      </table>

      <div>
        {show && (
        <div className="modal fade show d-block" onClick={close}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product Info</h5>
                <button type="button" className="btn-close" onClick={close}></button>
              </div>
              <div className="modal-body">
                <p><strong>ID:</strong> {show.id}</p>
                <p><strong>Name:</strong> {show.name}</p>
                <p><strong>Brand:</strong> {show.brand}</p>
                <p><strong>Category:</strong> {show.category}</p>
                <p><strong>Price:</strong> ₹{show.price}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={close}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Product
