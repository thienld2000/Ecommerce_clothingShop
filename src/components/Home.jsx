import React, { useEffect, useState } from 'react'
import Banner from '../assets/banner.jpg'
import Banner1 from '../assets/bannerWoman.jpg'
import Banner2 from '../assets/jewelryBanner.avif'
import Banner3 from '../assets/technologicalBanner.avif'
import { Link } from 'react-router-dom'
import Products from './Products'

const Home = () => {
    const [userName, setUserName] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        const fetchUserName = async () => {
            const username = localStorage.getItem('username')
            if (username) {
                setIsLogin(true)
                setUserName(username);
            }
        }
        fetchUserName();
    }, [])
    const handleLogout = () => {
        setIsLogin(false);
    }

    return (
        <div>
            <div className="container">
                <div className=" row my-2 " >
                    {isLogin ? (
                        <div className="col-md-12 d-flex flex-row justify-content-end m-auto p-auto buttons mx-auto">
                            <Link to={"/login"} className='btn btn-outline-dark fw-bold'><i className="fa fa-sign-in" aria-hidden="true" ></i> Đăng Xuất</Link>
                            <Link to={"/"} className='btn btn-outline-dark fw-bold'><i className="fa fa-user-circle" aria-hidden="true" onClick={handleLogout}></i>{userName}</Link>
                        </div>
                    ) : (
                        <div className="col-md-12 d-flex flex-row justify-content-center">
                            <span className='fw-bold border-end'>Bạn có muốn đăng nhập tài khoản?
                                <Link to={"/login"} className="fw-bold text-primary mx-1"><i className="fa fa-sign-in" aria-hidden="true" ></i>Đăng nhập </Link>
                            </span>
                            <span className='fw-bold'>Bạn có muốn đăng ký tài khoản?
                                <Link to={"/register"} className='fw-bold text-primary mx-1'><i className="fa fa-sign-in" aria-hidden="true"></i> Đăng ký</Link>
                            </span>
                        </div>
                    )
                    }
                </div>

                <hr />
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner rounded"   >
                        <div className="carousel-item active">
                            <img src={Banner} className="d-block w-100" alt="..." height="500px" />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner1} className="d-block w-100" alt="..." height="500px" />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner2} className="d-block w-100" alt="..." height="500px" />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner3} className="d-block w-100" alt="..." height="500px" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Products />
            </div>
        </div>
    )
}
export default Home;