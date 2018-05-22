"use strict"
import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getPosts} from "../actions/blogActions"
import {getProjects} from "../actions/projectsActions";


import {Link, withRouter} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
class Menu extends React.Component{
    componentDidMount(){

        // this.props.getPosts();
        // this.props.getProjects();

    }
    render(){
        return(
            <div ref={(app) => { this.app = app; }}>

                <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Anderson Day</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem eventKey={1} >Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/work">
                        <NavItem eventKey={2} >Work</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/blog">
                            <NavItem eventKey={2} >Blog</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/contact">
                            <NavItem eventKey={2} >Contact</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>

                        <NavItem href="https://www.facebook.com/anderson.day1" eventKey={1} >FB</NavItem>



                        <NavItem href="https://www.linkedin.com/in/andersonday/" eventKey={2} >LI </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <div id="content"></div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getPosts: getPosts,
        getProjects: getProjects,

    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))