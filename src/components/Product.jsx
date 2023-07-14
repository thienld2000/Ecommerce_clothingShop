import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { addCart } from '../features/cartSlice';


const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const dispath= useDispatch();
 
  const addProduct = (product) =>{
    dispath(addCart(product));
  } 
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();

  }, []);
  const Loading = () => {
    <>
      <div className="col-md-6">
        <Skeleton height="400px" />
      </div>
      <div className="col-md-6">
        <Skeleton height={50} width={300}/>
        <Skeleton height={75}/>
        <Skeleton height={25}width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={75} />
      </div>
    </>
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="d-flex justify-content-center col-md-6" key={product.id} style={{lineHeight:2}}>
          <img src={product.image} alt={product.title} height='400px' weight='400px' />
        </div>
        <div className="col-md-6 ">
          <h3 className='text-uppercase'>{product.category}</h3>
          <h1 className='display-4 my-2'>{product.title}</h1>
          <span className='lead fw-bold'>Rating {product.rating && product.rating.rate}
            <i className="fa fa-star mx-2" aria-hidden="true"></i>
          </span>
          <p className="display-5 fw-bold">$ {product.price}</p>
          <h5>{product.description}</h5>
          <button className="btn btn-outline-dark px-4 py-3" onClick={()=>addProduct(product)}> Add to cart</button>
          <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-2 py-3"> Mua Ngay</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className='container py-5'>
      <div className="row py-5">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  )
}

export default Product