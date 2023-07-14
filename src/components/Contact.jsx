import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mesage, setMesage] = useState("");

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (mesage === null || mesage === '') {
          isproceed = false;
          errormessage += ' Mesage';
      }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }
  const ContactSubmit = (e) => {
    e.preventDefault();
    let regobj = { name, email, mesage };
    if (IsValidate()) {
      fetch("http://localhost:8001/contacts", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regobj)
      })
        .then((res) => {
          toast.success('Send message successfully.')
        })
        .catch((err) => {
          toast.error('Failed :' + err.message);
        });
    }
  }
  return (
    <>
      <div className="container m-4 p-5">
        <div className="row">
          <div className="col-md-6 col-sm-10">
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
                  <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                  <Link to="mailto:lthien575@gmail.com">
                    lthien575@gmail.com
                  </Link>
                </p>
              </div>
            </address>
          </div>
          <br />

          <div className="col-md-6">
            <form onSubmit={ContactSubmit}>
              <div className="form-group row">
                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm"  >Your Name</label>
                <div className="col-sm-10">
                  <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control form-control-sm" id="colFormLabelSm" />
                </div>
              </div>
              <div className="form-group row my-3">
                <label for="colFormLabel" className="col-sm-2 col-form-label" >Email</label>
                <div className="col-sm-10">
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="colFormLabel" placeholder="example@gmail.com" />
                </div>
              </div>
              <div className="form-group row">
                <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Message</label>
                <div className="col-sm-10">
                  <input value={mesage} onChange={e => setMesage(e.target.value)} type="tetx" className="form-control form-control-lg" id="colFormLabelLg" placeholder="text here " />
                </div>
              </div>
              <div className="form-group row">
                <button type='submit' className="btn btn-outline-dark mx-2 my-2">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact