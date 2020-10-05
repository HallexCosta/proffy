import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import TeacherList from '../pages/TeacherList'
import TeacherForm from '../pages/TeacherForm'
import TeacherProfile from '../pages/TeacherProfile'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/profile" component={TeacherProfile} />
        </BrowserRouter>
    )
}

export default Routes