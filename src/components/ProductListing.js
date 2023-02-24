import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch } from 'react-redux' 
import {setProducts} from '../redux/actions/productsActions'
import './ProductComponent.css'


const ProductListing = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
                                     .catch(error => console.log(error))
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    });

  return (
    <div>
        <div className='containerBox'>
            <ProductComponent />
        </div>
    </div>
  )
}

export default ProductListing