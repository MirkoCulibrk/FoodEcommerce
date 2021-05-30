import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Blog from '../pages/Blog/Blog';
const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Router path="/shop" component={Shop}></Router>
            <Router path="/blog" component={Blog}></Router>
        </Switch>
    )
}

export default Router
