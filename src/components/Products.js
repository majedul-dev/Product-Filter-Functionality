import React, { useState, useEffect, useLayoutEffect } from "react";
import Product from "./Product";

const Products = ({ data }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: "all" });

  const getCategories = (items) => {
    let tempItems = items.map((item) => {
      return item.category;
    });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ["all", ...categories];
    return categories;
  };

  useEffect(() => {
    setItems(data);
    setCategories(getCategories(data));
  }, []);

  const handleItems = (e) => {
    let value = e.target.value;
    let tempItems = [...data];
    if (value === "all") {
      setItems(tempItems);
    } else {
      let items = tempItems.filter((item) => item.category === value);
      setItems(items);
    }
    setFilters(value);
  };
  if (items.length > 0) {
    return (
      <div className='container'>
        <h1 className='text-center display-4 mb-5'>Products</h1>
        <div className='row'>
          <div className='col-10 mx-auto text-center'>
            <select
              name='category'
              id='category'
              value={filters.category}
              onChange={handleItems}
              className='text-capitalize'>
              {categories.map((category, index) => (
                // ========= Select Option System ==========
                <option key={index} value={category}>
                  {category}
                </option>
                // ========== Button System ==========

                // <button type='button' key={index} onClick={() => handleItems(category)}>
                //   {category}
                // </button>
              ))}
            </select>
          </div>
        </div>
        <div className='row my-5'>
          {items.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </div>
    );
  } else
    return (
      <section className='menu py-5'>
        <div className='container'>
          <h1 className='text-center display-4 mb-5'>Products</h1>
          <div className='row'>
            <div className='col-10 col-sm6 mx-auto text-center text-capitalize'>
              <h1>there are no items to display</h1>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Products;
