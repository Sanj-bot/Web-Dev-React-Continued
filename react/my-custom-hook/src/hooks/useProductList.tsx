import { useEffect,useState } from "react";

export const useProductList=()=>{
    const[products,setProducts]=useState([]);

    const getProducts=async()=>{
        const ProductList=await fetch('https://fakestoreapi.com/products');
        const ProductListJson=await ProductList.json();
        console.log(ProductListJson);
        setProducts(ProductListJson)

    }
    useEffect(()=>{
        getProducts();
    },[])
 
 
    return {products};
}