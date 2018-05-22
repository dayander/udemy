import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postContact} from '../../actions/contactActions';
import {findDOMNode} from 'react-dom';


import {InputGroup, DropdownButton, MenuItem, Image, Col, Row, Well, Panel, FormControl, FormGroup,
    ControlLabel, Button} from 'react-bootstrap';
import Header from "../Header";



class ContactFrom extends React.Component{

    constructor(props){
        super(props);

    }



    handleSubmit(){
        const contact= {
            name: findDOMNode(this.refs.name).value,
            email: findDOMNode(this.refs.email).value,
            message: findDOMNode(this.refs.message).value,

        };

        console.log(contact)
        this.props.postContact(contact);
    }
    componentDidMount(){
        document.title = 'Contact Anderson Day';
    }

    render(){
        return(
            <div>


                <Header h1={"Contact Anderson Day"}/>
                <Col xs={12} >
                    <Panel>
                        <FormGroup controlId="name" >
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Name"
                                ref="name"
                            />
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup controlId="email" >
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                type="email"
                                placeholder="Enter Email"
                                ref="email"
                            />
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup controlId="message" >
                            <ControlLabel>Message</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Leave a message"
                                ref="message"
                            />
                            <FormControl.Feedback/>
                        </FormGroup>
                        <Button onClick={this.handleSubmit.bind(this)} >
                            Submit
                        </Button>
                    </Panel>
                </Col>

            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{

    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {
            postContact
        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFrom);