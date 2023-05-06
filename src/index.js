import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CartProvider } from "./context/CartContext";
import { AppProvider } from "./context/ProductContext";
import styles from "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <CartProvider>
      <React.StrictMode>
        <App style={styles} />
      </React.StrictMode>
    </CartProvider>
  </AppProvider>
);
