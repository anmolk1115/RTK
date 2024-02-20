import React, { useContext } from 'react';
import { ColorContext } from './Product';


const ProductChild = () => {
    const {color, backgroundColor} = useContext(ColorContext);
    console.log('color-', color);
    console.log('backgroundColor-', backgroundColor);
  return (
    <div>ProductChild</div>
  )
}

export default ProductChild;