//npx json-server --watch db.json --port 8001 
//để tạo, goi dc den  sever có lưu trữ json user

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const usenavigate = useNavigate();
    
    useEffect(()=>{
        localStorage.clear(); 
     },[]); 

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8001/user/" + username)
            .then((res) => res.json())
            .then((resp) => {
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                }else {
                    if (resp.password === password) {  
                        toast.success(`welcome ${resp.id}`);
                        localStorage.setItem('username',resp.id);
                        localStorage.setItem('userrole',resp.role);
                        usenavigate('/');                                             
                    }else{
                        toast.error('Please Enter valid credentials');
                    }                    
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
        
    }
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <div className="row mb-5">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '50px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group ">
                                <label>User Name</label>
                                <input value={username} onChange={e => setUserName(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password </label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> |
                            <Link className="btn btn-success" to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;