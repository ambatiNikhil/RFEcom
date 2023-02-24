import React from 'react'
import './ProductComponent.css'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList =  products.map(product => {
        const {id , title , image , price , category} = product;

        return (

            <div key={id}>
                <div className='productBox'>
                  <img src={image} alt={title} className="imageSize"/>
                  <h3 style={{fontSize: "15px"}}>{title}</h3>
                  <h5>category : <span style={{color : "blue"}}>{category}</span></h5>
                  <h6>price $ <span style={{color : "red"}}>{price}</span></h6>
                  <Link to={`product/${id}`}><button className='btn btn-success '>See Details</button></Link> 
                </div>
            </div>
          )
    })
  return <>{renderList}</>
}

export default ProductComponent