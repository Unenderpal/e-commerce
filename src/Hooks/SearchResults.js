import { useEffect, useState } from "react";
import React from "react";
import { SearchApi } from "../services/Api";


const SearchResults = (query) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const GetSearchResult = async () => {

    setLoading(true)
    const data = await SearchApi(query);
    setLoading(false)
    console.log(data.products);

    setProducts(data.products)
  }
  useEffect(() => {
    GetSearchResult();
  }, [query])

  return {
    loading,
    products,
  }
}
export default SearchResults;


