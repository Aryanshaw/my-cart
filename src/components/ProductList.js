import React from 'react';
import Product from './Product.js';

export default function ProductList(props) {
   
    return (
       props.productlist.length > 0 ?
        props.productlist.map((product,o)=>{
          return <Product product={product} key={o} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={o} removeItem={props.removeItem}/>;
       })
       : <h1>No Products exists</h1>
    );
}
