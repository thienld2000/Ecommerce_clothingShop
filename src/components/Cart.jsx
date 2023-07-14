import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { NavLink } from 'react-router-dom'
import { delCart, minusCart, addCart, clearCart, getTotals } from '../features/cartSlice'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(
        () => { dispatch(getTotals()) }, [cart, dispatch]
    )
    const handleRemove = (cartItem) => {
        dispatch(delCart(cartItem))
    };
    const handleMinus = (cartItem) => {
        dispatch(minusCart(cartItem));
    };
    const handlePlus = (cartItem) => {
        dispatch(addCart(cartItem));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className='container bg-light my-3 '>
            <h2 className='text-center'>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <>
                    <div className="text-center text-danger mt-5 mb-3">
                        Cart item is empty !!!
                    </div>

                    <div className='text-center'>
                        <NavLink to="/">
                            <span>Start shopping</span>
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </NavLink>
                    </div>
                </>
            ) : (
                <div className='container'>
                    <div className="row border fw-bold ">
                        <div className="col-md-4 ">Product</div>
                        <div className="col-md-2 text-center ">Price</div>
                        <div className="col-md-3 text-center">Quantity</div>
                        <div className="col-md-2 text-center ">Total</div>
                    </div>
                    <div>
                        {cart.cartItems && cart.cartItems?.map(cartItem => (
                            <div className="item border-bottom" key={cartItem.id}>
                                <div className="py-4">
                                    <div className="row justify-content-center">
                                        <div className="col-md-4 d-flex flex-column">
                                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                                            <h3>{cartItem.title}</h3>
                                        </div>
                                        <div className="col-md-2 text-center ">${cartItem.price}</div>
                                        <div className="col-md-3 text-center">
                                            <button className='btn btn-outline-dark' onClick={() => handleMinus(cartItem)}>-</button>
                                            <span className='m-2 p-2'>{cartItem.cartQuantity}</span>
                                            <button className='btn btn-outline-dark' onClick={() => handlePlus(cartItem)}>+</button>
                                        </div>
                                        <div className="col-md-2 text-center"><p className="lead fw-bold">${cartItem.price * cartItem.cartQuantity}</p></div>
                                        <div className='col-md-1'><button onClick={() => handleRemove(cartItem)} className="btn-close float-end"></button></div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col -md-9">
                            <button className="btn btn-outline-dark" onClick={() => handleClearCart()}> Clear Cart </button>
                        </div>
                        <div className="col-md-3">
                            <span>Subtotal </span>
                            <span>$ {cart.cartTotalAmount}</span>
                            <div>
                                <NavLink to="/">
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    <span> Start shopping </span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Cart;
