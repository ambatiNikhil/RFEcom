import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector , useDispatch } from 'react-redux'
import { selectedProduct , removeSelectedProduct} from '../redux/actions/productsActions'
import { useParams } from 'react-router-dom'

const containerStyle = {
  height : "70vh",
  width : "90vw",
  display : "flex",
  flexDirection : "row",
  margin : "25px",
  borderRadius : "5px",
  border : "3px solid black"
}

const imageContainer = {
  height : "400px",
  width : "300px",
  display : "flex",
  flexDirection : "coloum",
  justifyContent : "center",
  alignItems : "center",
  margin : "10px"
}

const imageSize = {
  height: "400px",
  width : "300px"
}

const ProductDetails = () => {
  const { productId } = useParams()
  let product = useSelector(state => state.product)
  const {image, title , price , category , description} = product;
  const dispatch = useDispatch();
  console.log(product)

  const fetchProductDetalils = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                            .catch(error => console.log(error))
          dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
     if(productId && productId !== "") fetchProductDetalils(productId);
     return () => {
      dispatch(removeSelectedProduct())
     }
  } , [productId])

  
  const handleBack = () => {
    window.location.href = "/"
  }
  return (
    <div style={containerStyle}>
        <div style={imageContainer}>
          <img src = {image} alt={title} style={imageSize}/>
        </div>
        <div>
          <h1>{title}</h1>
          <p style={{fontSize : "25px"}}>{description}</p>
          <h5>Price : <span style={{color:"red"}}>{price} $</span></h5>
          <h6>Category : <span style={{color : "green"}}>{category}</span></h6>
          <button className='btn btn-primary' onClick={handleBack}>GoBack</button> 
        </div>
    </div>
  )
}

export default ProductDetails