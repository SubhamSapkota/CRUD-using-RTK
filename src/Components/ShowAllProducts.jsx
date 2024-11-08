import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bUrl } from "../constant";

//hit api=>data=>display

//delete product
const ShowAllProducts = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();
  const getProducts = async () => {
    try {
      let output = await axios({
        method: "get",
        url: `${bUrl}/products`,
      });
      setProducts(output.data.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  //we cannot use async keyword in useEffect
  useEffect(() => {
    getProducts();
  }, []);

  const handleView = (id) => {
    return () => {navigate(`/products/${id}`)};
  };
  const deleteProduct = async (id) => {
    try {
      await axios({
        method: "delete",
        url: `${bUrl}/products/${id}`,
      });
      getProducts();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {products.map((item, i) => {
        return (
          <div key={i} style={{ border: "1px solid black", margin: "10px" }}>
            <h6>{item.name}</h6>
            <img
              src={item.productImage}
              alt="product image"
              style={{ width: "100px", height: "100px" }}
            />
            <h1>{item.price}</h1>
            <h1>{item.quantity}</h1>
            <h1>{item.company}</h1>

            <button onClick={deleteProduct(item._id)}>Delete</button>

            <button onClick={handleView(item._id)}>View Product</button>

            <button onClick={() => navigate(`/products/update/${item._id}`)}>
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllProducts;
