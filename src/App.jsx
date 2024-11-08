import { Outlet, Route, Routes } from 'react-router-dom'
// import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import CreateProduct from './Components/CreateProduct'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ShowAllProducts from './Components/ShowAllProducts'
import UpdateProduct from './Components/UpdateProduct'
import ViewProduct from './Components/ViewProduct'
import { changeAge, changeName } from './features/infoSlice'
import { changeAddress } from './features/addressSlice'
import { changePrice, changeProductName, changeQuantity } from './features/productSlice'
import { changeDescription, changeTitle } from './features/blogSlice'
import ShowAllProductsUsingRTK from './Components/ShowAllProductsUsingRTK'
import CreateProductUsingRTK from './Components/CreateProductUsingRTK'
import UpdateProductUsingRTK from './Components/UpdateProductUsingRTK'

/* 
localhost:3000 => Home Page
localhost:3000/products => give all products
localhost:3000/products/:id => give specific products
localhost:3000/products/create => form to add products
localhost:3000/products/update/:id => form to update products

Create Products
Read Prodcuts
Delete Products
Get Single Product
*/

const App=()=> {
  /* let dispatch = useDispatch()
  let info = useSelector((store)=>{
    return (store.info)
  })
  console.log(info)

  let address = useSelector((store)=>{
    return (store.address)
  })
  console.log(address)

  let product = useSelector((store)=>{
    return (store.product)
  })
  console.log(product)

  let blog = useSelector((store)=>{
    return (store.blog)
  })
  console.log(blog) */

  return (
    <>
   

    <Routes>
      <Route path="/" element={<div><Navbar/> <Outlet></Outlet> <Footer/></div>}>
      <Route index element={<div>Home Page</div>}></Route>
      
      <Route path="products" element={<div><Outlet></Outlet></div>}>
      {/* <Route index element={<ShowAllProducts></ShowAllProducts>}></Route> */}
      <Route index element={<ShowAllProductsUsingRTK></ShowAllProductsUsingRTK>}></Route>
      <Route path=":id" element={<ViewProduct></ViewProduct>}></Route>
     {/*  <Route path="create" element={<CreateProduct></CreateProduct>}></Route> */}
      <Route path="create" element={<CreateProductUsingRTK></CreateProductUsingRTK>}></Route>
      <Route path="update" element={<div><Outlet></Outlet></div>}>
      <Route path=":id" element={<UpdateProductUsingRTK></UpdateProductUsingRTK>}></Route>
      {/* <Route path=":id" element={<UpdateProduct></UpdateProduct>}></Route> */}
      </Route>
      </Route>
      </Route>
    </Routes>

    {/* <div>{info.name}</div>
    <div>{info.age}</div>
    <div>{address.city}</div>
    <div>{address.province}</div> <br />
    <div>{product.productName}</div>
    <div>{product.price}</div>
    <div>{product.quantity}</div> <br />

    <div>{blog.title}</div>
    <div>{blog.description}</div>

    <button onClick={()=>{
      dispatch(changeName("hari"))
    }}>change Name</button>

    <button onClick={()=>{
      dispatch(changeAge(28))
    }}>change Age</button>

    <button onClick={()=>{
      dispatch(changeAddress("Harion-11"))
    }}>Change Address</button>
    <br />
    <button onClick={()=>{
      dispatch(changeProductName("Lenovo"))
    }}>Change product name</button>
    <button onClick={()=>{
      dispatch(changePrice(100000))
    }}>Change Aprice</button>
    <button onClick={()=>{
      dispatch(changeQuantity(12))
    }}>Change quantity</button> <br />

    <button onClick={()=>{
      dispatch(changeTitle("My first Blog"))
    }}>Change Title</button>

    <button onClick={()=>{
      dispatch(changeDescription("Welcome to My Blog Gayssssssss!"))
    }}>Change Description</button> */}
    </>
  )
}

export default App
