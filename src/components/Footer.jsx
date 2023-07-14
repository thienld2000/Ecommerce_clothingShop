import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="container py-4">
      <div className="row">
        <div className="col-md-3 col-12">
          <h3>About</h3>
          <p>Mong các bạn có trải nghiệm tốt về website của tôi, nếu có gì chưa được 
            tốt mong các bạn góp ý để website được hoàn thiện hơn</p>
        </div>
        <div className="col-md-3 col-6 text-float-right">
          <h3>Links</h3>
          <ul>
            <li>
              <span><i className="fa fa-heart"></i></span><Link to="/">Home</Link>       
            </li>  
            <li>
              <span><i className="fa fa-heart"></i></span><Link to="/product">Products</Link>
            </li>
            <li>
              <span><i className="fa fa-heart"></i></span><Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-6 ">
          <h3>Services</h3>
          <ul>
            <li>
              <span><i className="fa fa-heart"></i></span><Link to="#">Tư vấn</Link>
            </li>
            <li>
              <span><i className="fa fa-heart"></i></span><Link to="#">Chăm sóc khách hàng</Link>
            </li>
            <li>
              <span><i className="fa fa-heart"></i></span><Link to="#">Phản hồi</Link>
            </li>

            <li>
              <span><i className="fa fa-heart"></i></span><Link to="#">Báo lỗi</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-6 ">
          <h3>Have Link Questions?</h3>
            <address>
              <div>
                <p>
                  <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                  Ha Noi, VietNam
                </p>
              </div>
              <div>
                <p>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <Link to="tel:+84964698674"> +84 964698674 </Link>
                </p>
              </div>

              <div>
                <p>
                  <span><i className  ="fa fa-envelope-o" aria-hidden="true"></i></span>
                  <Link to="mailto:lthien575@gmail.com">
                    lthien575@gmail.com
                  </Link>
                </p>
              </div>
            </address>
        </div>
      </div>
      <div className="row">
        <div className=" col-12 text-center py-4">
          <Link to="https://www.instagram.com/lthien575/" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>

          </Link>

          <Link to="https://www.facebook.com/profile.php?id=100007529283089" target="_blank">

            <i className="fa fa-facebook-official m-1 p-2" aria-hidden="true"></i>

          </Link>

          <Link to="https://mail.google.com/mail" target="_blank">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="row text-center">
          <p> For all the lover | From clothing with love</p>
        </div>
      </div>
    </footer>
  )
}
