"use strict"
// REACT
import React from 'react';
import ReactDom from 'react-dom';
// REACT-ROUTER
//import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Route, Switch} from 'react-router-dom';
import Menu from './components/menu';
import Footer from './components/footer';
// END REACT- ROUTER


import Cart from './components/pages/cart';
import ContactForm from './components/pages/contactForm';
import BooksForm from './components/pages/booksForm';
import HomePage from './components/pages/homePage';
import BlogPostList from './components/pages/blogPostList';
import BlogPostItem from './components/pages/blogPostItem';
import Admin from './components/admin/Admin';
import ProjectList from './components/projectList';
import ProjectTemplate from './components/projects/projectTemplate';
//import Main from './main';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// RETRIVES COMPONENTS BASED ON STATUS
const Status = function ({ code, children }){
    return (
        <Route render={function({ staticContext }) {
            if (staticContext)
                staticContext.status = code
            return children
        }}/>
    )
}
//NOT-FOUND COMPONENT
const NotFound = function(){
    return (
        <Status code={404}>
            <div>
                <h2> Sorry, cannot find this page</h2>
            </div>
        </Status>
    )
}

// CLIENT-SERVER SHARED ROUTES
const routes = (
    <div  >
        <Menu  />



        <Switch>


            <Route exact={true} path="/" component={HomePage}/>



            <Route exact={true} path="/work" component={ProjectList}/>


            <Route path="/vim" component={ProjectTemplate}/>
            <Route path="/alc" component={ProjectTemplate}/>
            <Route path="/comom" component={ProjectTemplate}/>
            <Route path="/contact" component={ContactForm}/>
            <Route path="/blog" component={BlogPostList}/>
            <Route path="/post/:title" component={BlogPostItem}/>



            <Route path="/admin" component={Admin}/>

            <Route component={NotFound}/>
        </Switch>


        <Footer />
    </div>
);

export default routes;