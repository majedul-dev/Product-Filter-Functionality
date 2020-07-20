import React from "react";
import "./App.css";
import { data } from "./data";

import Products from "./components/Products";

function App() {
  return (
    <div className='App'>
      <Products data={data} />
    </div>
  );
}

export default App;
