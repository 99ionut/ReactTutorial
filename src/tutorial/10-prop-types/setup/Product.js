import React from 'react';
import PropTypes from "prop-types"
import defaultImage from "../../../assets/default-image.jpeg"

const Product = ({image,name,price}) => {
  const url = image && image.url
  return (
  <article className='product'>
    <h4>{name}</h4>
    {//last API obj doesnt have a price, if you work with APIs expect this to happen. Youll get an error if you dont plan
    //the last one also doesnt have an img so when you iterate you will get: Cannot read properties of undefined (reading 'url')
    }
    <img src={url || defaultImage}/>
    <p>{price || 3.99}</p>
  </article>
  );
};

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}

// Product.defaultProps = {
//   name: "default name",
//   price: 0.00,
//   image: defaultImage
// }

export default Product;
