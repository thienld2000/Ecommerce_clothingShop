import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let conponentMounted = true;  

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (conponentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        conponentMounted = false;
      }

    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height="350"  />
        </div>
        <div className="col-md-3">
          <Skeleton height="350"  />
        </div>
        <div className="col-md-3">
          <Skeleton height="350"  />
        </div>
        <div className="col-md-3">
          <Skeleton height="350"  />
        </div>
          
      </>
    );
  };
  const filterProduct = (type) =>{
    const updateList = data.filter((x)=> x.category === type);
    setFilter(updateList);

  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center">
          <button className="btn btn-outline-dark m-1"onClick={()=>setFilter(data)}>ALL</button>
          <button className="btn btn-outline-dark m-1"onClick={()=>filterProduct("men's clothing")}>MEN'S Clothes</button>
          <button className="btn btn-outline-dark m-1"onClick={()=>filterProduct("women's clothing")}>WOMEN'S Clothes</button>
          <button className="btn btn-outline-dark m-1"onClick={()=>filterProduct("jewelery")}>JEWELERY</button>
          <button className="btn btn-outline-dark m-1"onClick={()=>filterProduct("electronics")} >Technological</button>
        </div>
        {filter.map((product, key) => {
          return (
            <>
              <div className='col-md-3 mb-4'>
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} height="280px" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0, 20)}...</h5>
                    <p className="text-bold">$ {product.price}</p>
                    <NavLink to={`/products/${product.id}`}className='btn btn-primary'>Buy now</NavLink>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">
              LASTEST PRODUCTS
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}

export default Products