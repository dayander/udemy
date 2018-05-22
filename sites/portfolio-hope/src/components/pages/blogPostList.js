"use strict";

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPosts} from '../../actions/blogActions';
import {Carousel,Grid, Col, Row, Button} from 'react-bootstrap';
import Header from "../Header";
import { Route, Switch, Link, withRouter} from 'react-router-dom';
import BlogPostItem from './blogPostItem';
import PostLarge from '../postLarge';








class BlogPostList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            h1: "Anderson's Blog Posts",
            h2: "A place where I share my ideas and research",


        }
    }


     componentDidMount(){
         document.title = 'Blog Posts || Anderson Day';


         // Set focus to the content container
         document.getElementById('app').focus();

         // Ensure the viewport returns to the top of the document window
         window.scrollTo(0, 0);


        this.props.getPosts();





    }
    render(){
        const blogPostList = this.props.posts.posts.map((post, i)=>{
            return(
                <Col xs={12}  key={i}>

                    <Link params={this.props.posts.posts} to={'/post' +post.slug}>
                        <PostLarge title={post.name} />
                    </Link>

                </Col>
            )
        });



        return(
            <div>

                  <Header h1={this.state.h1}   h2={this.state.h2}/>

                <Row style={{marginTop: '15px'}}>
                    <div className="container">
                    <h2>Area Under Development</h2>
                        <p>I'm busy working on other projects right now and wanted a place where to show my work. Soon
                        this will also be a place to share my thinking.</p>
                    </div>
                    {blogPostList}
                </Row>
                <Switch>
                <Route path='/post/test' component={BlogPostItem}/>
                </Switch>

            </div>
        )
    }

}


const mapStateToProps = (state)=>{
    return{
    posts:state.posts,
    }
};

const mapDistpatchTopProps = (dispatch) =>{
    return bindActionCreators({
        getPosts,

    }, dispatch)
};

export default connect(mapStateToProps, mapDistpatchTopProps)(BlogPostList);