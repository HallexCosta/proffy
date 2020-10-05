import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ConcludedSignUp from '../pages/ConcludedSignUp'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import TeacherProfile from '../pages/TeacherProfile'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/concluded-signup" component={ConcludedSignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password/:recovery_key" component={ResetPassword} />
            <Route path="/teste" component={TeacherProfile} />
        </BrowserRouter>
    )
}

export default Routes