import React, { useState } from 'react'
import { API_URL } from '../../config/config';
import Layout from '../../pages/Layout'

const  Signup = () => {
    const [user, setUser] = useState({name:'',email:'',password:''});

    const handleChange = (e) => {
           setUser({...user, [e.target.id]:e.target.value })
    }

    const submitSignup = e => {
        e.preventDefault();
 
        fetch(`${API_URL}/signup`,{
            method:"POST",
            headers:{
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => console.log(user))
        .catch(err => console.error(err))

    }

const form = () => (
    <form onSubmit={submitSignup}>
        <div className="form-group">
          <label className="text-muted" htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="text-muted" htmlFor="email">Email address</label>
          <input type="email" id="email" className="form-control" onChange={handleChange} />
        </div>
      
        <div className="form-group">
           <label className="text-muted " htmlFor="password">Password</label>
           <input type="password" id="password" className="form-control" onChange={handleChange} />
        </div> 
       
        <button className="btn btn-lg btn-block btn-outline-success mt-2"> Sign Up </button>
     {JSON.stringify(user)}
    </form>
)
    return (
        <div>
            <Layout 
               title="Singup Page" 
               description="Node React Ecomerce" 
               className="container" >
                  <div className="row">
                      <div className="col-md-6 mc-auto">
                          { form() }
                      </div>
                  </div>
               </Layout>
        </div>
    )
}

export default Signup
