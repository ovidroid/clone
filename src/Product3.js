
import { Link } from '@material-ui/core'
import React from 'react'
import './Product.css'
function Product3({id,title,price,image,rating}){
    return(
        <div className="product">

            <div className="product__info">
                <p>{id}</p>
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
               

            </div>
            
            <img src={image} alt="img"/>
            
           <Link to='/Iphone'> <button >Add to Cart</button></Link>
        </div>

    )
}

export default Product3