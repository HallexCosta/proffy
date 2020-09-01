import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ConcludedSignUp from '../pages/ConcludedSignUp'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/concluded-signup" component={ConcludedSignUp} />
        </BrowserRouter>
    )
}

export default Routes