import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Menu from '../component/Menu/Menu'

import Signin from '../component/user/Signin'
import Signup from '../component/user/Signup'
import Home from '../pages/Home'


const  Routes = () => {
    return (

        <BrowserRouter>
        <Menu />
            <Switch>
                <Route path='/signin' component={Signin} exact/>
                <Route path='/signup' component={Signup} exact/>
                <Route path='/' component={Home} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
