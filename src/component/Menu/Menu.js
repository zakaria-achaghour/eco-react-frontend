import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const isActive = (history, path) => {
    if(history.location.pathname ===path){
            return {color:'#000'}
    }else{
        return {color:'#fff'}

    }

}
const Menu = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Ecommerce</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link style={isActive(props.history,'/')} className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                      
                      
                    </ul>
                    <ul className="navbar-nav d-flex mt-2 mt-lg-0">
                       
                        <li className="nav-item">
                            <Link style={isActive(props.history,'/signin')} className="nav-link" to="/signin">SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={isActive(props.history,'/signup')} className="nav-link" to="/signup">SignUp</Link>
                        </li>
                      
                    </ul>
                   
                </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Menu)
