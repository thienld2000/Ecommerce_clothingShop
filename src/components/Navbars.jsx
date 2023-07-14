import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css"

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Navbars = () => {
    const { cartTotalQuantity } = useSelector(state => state.cart);
    const [data, setData] = useState([]);
    const [searchFilter, setSearchFilter] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://fakestoreapi.com/products/`);
            const result = await response.json();
            setData(result);  
        }
        getData();
    }, [])
    const handleOnChange = (e) => {
        const newWord = e.target.value;
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(newWord.toLowerCase());
        })
        if (newWord === "") {
            setSearchFilter([]);
        } else {
            setSearchFilter(newFilter);
        }
    }
    return (
        <>
            <div className='container'>
                <Navbar expand="lg" className=" bg-body-tertiary ">
                    <Container fluid >
                        <Navbar.Brand as={Link} to={"/"}>CLOTHING SHOP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="d-flex me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >                       
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                            </Nav>

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" onChange={handleOnChange} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" ><i className="fa fa-search" aria-hidden="true">Search</i></button>
                            </form>
                            <Link to={"/cart"} className='btn btn-outline-dark fw-bold ms-auto my-2 '><i className="fa fa-shopping-cart " aria-hidden="true"></i> Cart({cartTotalQuantity})</Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            {
                (searchFilter.length != 0) && (
                    <div className="searchPlay row">
                        <div className="offset-lg-6 col-md-12  dataResult">
                            {searchFilter.map((product, key) => {
                                return (
                                    <>
                                        <div key={product.id}></div>
                                        <Link to={`/products/${product.id}`} className="ProductsTitle" >{product.title}</Link>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </>
    );
}
export default Navbars;
