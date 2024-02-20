import React, { useEffect, useState } from 'react';
import '../styles/product.css';
import ProductChild from './ProductChild';
import HOCDemo from './HOCDemo';

export const ColorContext = React.createContext();

const Product = () => {
    const [productData, setProductData] = useState({});
    const endpoint = 'https://fakestoreapi.com/products/1';
    const containerClass = "card-container";

    useEffect(() => {
            async function getProduct() {
                try {
                    const data = await fetch(endpoint)
                    const response = await data.json();
                    console.log('response-', response);
                    setProductData(response);
                } catch(err) {
                    console.error(err);
                }
            }

        getProduct();
    }, []);

    const getBackgroundColor = () => {
        const {rating:{rate}} = productData;
        // alert(JSON.stringify(productData));
        // rate = 3.9;
        // const rate = 3;
        console.log(typeof rate, rate);
        let color = '';
        if(rate > 4) {
            color = 'yellow';
        } else if (rate >=3) {
            color = 'red'; 
        } else if (rate < 3) {
            color = 'pink';
        } else {
            color = 'white';
        }

        return color;

        // switch(rate) {
        //     case rate > 4:
        //         return 'red';
        //         // break;
        //     case rate >= 3:
        //         return 'yellow';
        //         // break;
        //     case rate < 3:
        //         return 'pink';
        //         // break;
        //     default:
        //         return 'white'
        // }
    };

    const getProductCardLayout = () => {
        const {category, description, image, price, title, rating: {rate}} = productData;
        return (
            <>
                <div className={containerClass} style={{backgroundColor: getBackgroundColor()}}>
                    <div className={`${containerClass}-image-container`}>
                        <img src={image} width={'200px'} className={`${containerClass}-image`} />
                    </div>
                    <div className={`${containerClass}-title`}>{title}</div>
                    <div className={`${containerClass}-category`}>{category}</div>
                    <div className={`${containerClass}-description`}>{description}</div>
                    <div className={`${containerClass}-price-block`}>{price}</div>
                    rate is {rate}
                </div>
                <ColorContext.Provider value={{color: 'red', backgroundColor: 'teal'}}>
                    <ProductChild />
                    <HOCDemo />
                </ColorContext.Provider>
            </>
        )

    };

  return (
    <div>
        {productData?.id ? getProductCardLayout() : <div>Loading, please wait...</div>}
    </div>
  )
}

export default Product