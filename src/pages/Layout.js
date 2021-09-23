import React from 'react'

const Layout = ({ title, description, children, className }) => {
    return (
        <div>
            <div className="jumbotron bg-light">
                <h1 className="display-01">{ title }</h1>
               <p className="lead"> { description } </p>
            </div>
            <div className={ className }>
                { children }
            </div>
        </div>
    )
}

export default Layout
