import { useEffect, useState } from "react";
import Products from "../components/Products";

export default function Debounce() {
  const [search, setSearch] = useState();
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    //2. if no changes, then the timeout variable will fire
    let timeout = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);

    //1. every time the "search" state is updated, we clear the timeout variable
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  return (
    <div className="mx-auto">
      <div className="p-3 border-2 border-red-500 rounded-md text-red-500">
        Debounce function on search box
      </div>

      <div className="grid md:grid-cols-2 px-4 py-2 gap-4  mt-2">
        <div className="col-span-1 md:border-r-2 md:border-red-400 min-h-screen">
        <span>basic debounce : </span>
            <div className="flex justify-center">
                <input
                type="text"
                className="border-2 border-gray-400 rounded-md px-2"
                onChange={(e) => setSearch(e.target.value)}
                />  
            </div>
            <br />
            <div className="flex justify-center">
                {debouncedValue && debouncedValue}
            </div>
        </div>
        
        <div className="col-span-1">
            <Products />
        </div>
      </div>

    </div>
  );
}
