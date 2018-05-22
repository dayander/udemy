'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row, Well, Button, ButtonGroup, Label, Modal} from 'react-bootstrap';
import shortid from 'shortid'
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart, getCart} from '../../actions/cartActions';
class Cart extends React.Component{




    componentDidMount(){
        this.props.getCart();
    }

    onIncrement(_id){
        this.props.updateCart(_id, 1, this.props.cart);
    }

    onDecrement(_id, quantity){
        if(quantity>1){
            this.props.updateCart(_id, -1, this.props.cart);
        }
    }
    constructor(){
        super();
        this.state = {
            showModal: false,
        }

    }

    open(){
        this.setState({showModal: true})
    }
    close(){
        this.setState({showModal: false})
    }

    onDelete(_id) {

// Create a copy of the current array of books
        const currentBookToDelete =
            this.props.cart;
// Determine at which index in books array is the book to be deleted
        const indexToDelete =
            currentBookToDelete.findIndex(
                function (cart) {
                    return cart._id === _id;
                }
            );

//use slice to remove the book at the specified index
        let cartAfterDelete =
            [...currentBookToDelete.slice(0,
                indexToDelete),
                ...currentBookToDelete.slice(indexToDelete +
                    1)];

        this.props.deleteCartItem(cartAfterDelete);
    }







    render(){
        if(this.props.cart[0]){
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }
    renderEmpty(){
        return(<div></div>)
    }
    renderCart(){
        const cartItemsList =
            this.props.cart.map(function(cartArr, i){
                return(
                    <Panel key={i}>

                        <Row>

                            <Col xs={12} sm={2}>
                                <h6>{cartArr.price}</h6>
                            </Col>
                            <Col xs={12} sm={4}>
                                <h6>{cartArr.title}</h6><span>Quantity: {cartArr.quantity}    </span>
                            </Col>
                            <Col xs={6} sm={4}>
                                <ButtonGroup style={{minWidth: '300px'}}>
                                    <Button onClick={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)} bsStyle="default" bsSize="small">-</Button>
                                    <Button onClick={this.onIncrement.bind(this, cartArr._id)} bsStyle="default" bsSize="small">+</Button>
                                    <span>    </span>
                                    <Button onClick={this.onDelete.bind(this, cartArr._id)} bsStyle="danger" bsSize="small">Delete</Button>
                                </ButtonGroup>
                            </Col>

                        </Row>
                    </Panel>
                )
            },this);
        return(
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
                <Row>
                    <Col xs={12}>
                        <h6>Total Amount: {this.props.totalAmount}</h6>

                        <Button onClick={this.open.bind(this)}>
                            PROCEED TO CHECKOUT
                        </Button>
                    </Col>
                </Row>
                    <Modal show={this.state.showModal}
                           onHide={this.close.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Thank
                                you!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>Your order has been
                                saved</h6>
                            <p>You will receive an email
                                confirmation</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Col xs={6}>
                                <h6>total $: {this.props.totalAmount}</h6>
                            </Col>
                            <Button
                                onClick={this.close.bind(this)}>Close</Button
                            >
                        </Modal.Footer>
                    </Modal>
            </Panel>



        )
    }
}
const mapStateToProps = (state) =>{
        return{
            cart: state.cart.cart,
            totalAmount: state.cart.totalAmount,

        }


};

const mapDistpatchTopProps = (dispatch) =>{
    return bindActionCreators({
        deleteCartItem: deleteCartItem,
        updateCart: updateCart,
        getCart: getCart,

    }, dispatch)
};

export default connect(mapStateToProps, mapDistpatchTopProps)(Cart);