import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/global.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  // npm i react-router-dom for routing features
  // and always wrap <App /> with <BrowserRouter><App /><BrowserRouter/>
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <App />
    </BrowserRouter>
  </Provider>
);
