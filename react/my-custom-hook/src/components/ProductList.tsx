// import { useEffect,useState} from "react";
import ProductCard from "./ProductCard";
import {useProductList} from "../hooks/useProductList"
const ProductList =()=>{
    // const [products,setProducts]=useState([]);
    // useEffect(()=>{
    //     console.log("inside useEffect....")
    //         getProducts();
    // },[])
    // const getProducts=async ()=>{
    //     const ProductList=await fetch('https://fakestoreapi.com/products');
    //     const ProductListJson=await ProductList.json();
    //     console.log(ProductListJson);
    //     setProducts(ProductListJson)
    // }
    // console.log("rendering.....");

    const {products}=useProductList();

    return(
        <div className="productList">
                
                {
                    // products.map(product=><div > {product.title} </div>)
                   products.map(product=><ProductCard title={product.title} imageUrl={product.image} price={product.price}/>)  
                }

        </div>
    )
}

export default ProductList;


