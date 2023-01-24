import axios from "axios";
import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce";

export default function Throttle() {

const [search, setSearch] = useState();
const [products, setProducts] = useState();


/* FIXME: pending functionality */
function throttle(){
    let timer;

    return () => {
        if(!timer){
            clearTimeout(timer);
            timer = setTimeout( () => {
                timer = undefined;
            }, 1000 )
        }
    }

}

throttle()

/*
const debounced = useDebounce(search, 1000);

useEffect( () => {
    async function getProducts(){
        try {
            if(debounced){
                const data = await axios.get("https://63c62103d307b76967334c03.mockapi.io/products?search=" + debounced);
                //console.log(data.data)
                setProducts(data.data)
            } else {
                setProducts()
            }
        } catch (error) {
            console.log(error)
        }
    }
    getProducts()
}, [debounced] )
*/

  return (
    <div>
      Debounce with throttle (useDebounce custom hook):<br/>
      Mock API
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
                <span key={product.id}>{product.name}</span>
              );
            })
          : null}
      </div>
    </div>
  )
}
