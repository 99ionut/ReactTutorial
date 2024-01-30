import React from 'react';

const Product = ({image,name,price}) => {
  return <article className='product'>
    <h4>{name}</h4>
    {//last API obj doesnt have a price, if you work with APIs expect this to happen. Youll get an error if you dont plan
    }
    <img src={image.url}/>
    <p>{price}</p>
  </article>;
};

export default Product;
