import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { setProducts} from "../redux/actions/product"

const ProductList = () => {
  const products =  useSelector(state => state.allProducts.products)
  const dispatch = useDispatch()
  const fetchProducts = () => {
      fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => dispatch(setProducts(data)))
  }

  useEffect(() => {
    fetchProducts()
  },[])
  return (
    <div className='ui grid container'>
        <Product />
    </div>
  )
}

export default ProductList