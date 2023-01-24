import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    let items = setTimeout(() => {
        searchitem(search);
    }, 500)

    return () => {
      clearInterval(items);
    };
  }, [search]);

  function searchitem(search) {
    if (!search) return;

    const url = "https://dummyjson.com/products/search?q=" + search;

    axios
      .get(url)
      .then((response) => {
        //console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <div>
      Search Products API with debounce:
      <div className="flex justify-center">
        <input
          type="text"
          className="border-2 border-gray-400 rounded-md px-2"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <div>
        {products
          ? products.map((product) => {
              return (
                <>
                  <span key={product.id}>{product.title}</span>
                  <br />
                </>
              );
            })
          : null}
      </div>
    </div>
  );
}
