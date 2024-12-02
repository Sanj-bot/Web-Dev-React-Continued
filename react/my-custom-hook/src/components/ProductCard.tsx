interface ProductCardProps{
    title:string;
    imageUrl:string;
    price:number;
}
const ProductCard =({imageUrl,title,price}:ProductCardProps)=>{

    return(
        <div class="productCard">
            <img src={imageUrl} alt={title}/>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard;