"use strict";

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from './bookItem';
import BooksForm from './BooksForm';
import Cart from './cart';



class BooksList extends React.Component{
    componentDidMount(){
        this.props.getBooks();

}
    render(){
        const booksList = this.props.books.map((books, i)=>{
            return(
                <Col xs={12} sm={6} md={4} key={i}>
                    <BookItem  _id={books._id} title={books.title} description={books.description} price={books.price} />

                </Col>
            )
        });
        return(
           <Grid>
               <Row>
                   <Cart/>
               </Row>
               <Row style={{marginTop: '15px'}}>
                   <Col xs={12} sm={6}>
                       <BooksForm/>
                   </Col>
                   {booksList}
               </Row>
           </Grid>
        )
    }

}


const mapStateToProps = (state)=>{
    return{
        books: state.books.books
    }
};

const mapDistpatchTopProps = (dispatch) =>{
  return bindActionCreators({getBooks: getBooks}, dispatch)
};

export default connect(mapStateToProps, mapDistpatchTopProps)(BooksList);