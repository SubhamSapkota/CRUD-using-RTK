import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bUrl } from "../constant";
import { useDeleteProductMutation, useReadProductsQuery } from "../services/api/productService";

//hit api=>data=>display

//delete product
const ShowAllProductsUsingRTK = () => {
  let { isError:isErrorReadProducts, isSuccess:isSuccessReadProducts, isLoading:isLoadingReadProducts, data:dataReadProducts, error:errorReadProducts } = useReadProductsQuery({});

  let [deleteProduct,{ isError:isErrorDeleteProduct, isSuccess:isSuccessDeleteProduct, isLoading:isLoadingDeleteProduct, data:dataDeleteProduct, error:errorDeleteProduct }] = useDeleteProductMutation();
  // console.log(data?.data?.results)

  useEffect(() => {
    if (isErrorReadProducts) {
      console.log(errorReadProducts?.error);
    }
  }, [isErrorReadProducts, errorReadProducts]);

  useEffect(() => {
    if (isErrorDeleteProduct) {
      console.log(errorDeleteProduct?.error);
    }
  }, [isErrorDeleteProduct,errorDeleteProduct]);

  useEffect(()=>{
    if(isSuccessDeleteProduct){
      console.log("Product deleted successfully");
    }
  },[isSuccessDeleteProduct])

  let navigate = useNavigate();
  // console.log("*******",dataReadProducts)

  let products = dataReadProducts?.result || []; /* || [] */
  console.log(products)
  // console.log(products)
  const handleView = (id) => {
    return () => {
      navigate(`/products/${id}`);
    };
  };
  //  deleteProduct = async (id) => {
  //   try {
  //     await axios({
  //       method: "delete",
  //       url: `${bUrl}/products/${id}`,
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div>
      {isLoadingReadProducts && <h1>Loading...</h1>}
      <div>
        {products?.map?.((item, i) => {
          return (
            <div key={i} style={{ border: "1px solid black", margin: "10px" }}>
              <h3>{item.name}</h3>
              <img
                src={item.productImage}
                alt="product image"
                style={{ width: "100px", height: "100px" }}
              />
              <h5>{item.price}</h5>
              <h5>{item.quantity}</h5>
              <h5>{item.company}</h5>

              <button onClick={(e)=>{
                deleteProduct(item._id)
              }}>{isLoadingDeleteProduct ? "..." : "Delete Product"}</button>

              <button onClick={handleView(item._id)}>View Product</button>

              <button onClick={() => navigate(`/products/update/${item._id}`)}>
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowAllProductsUsingRTK;
