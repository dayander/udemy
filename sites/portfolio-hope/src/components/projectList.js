'use strict';

import React from 'react';

import {Row,Col, Well} from 'react-bootstrap';

import ProjectLarge from './projectLarge';



import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProjects, getHome,getOne} from '../actions/projectsActions'
import Header from "./Header";

class ProjectList extends React.Component{


    constructor(props){
        super(props);


        this.state={


        }

    }

    componentDidMount(){

        document.title = "Anderson's Work";
        // Set focus to the content container
        document.getElementById('app').focus();

        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);

        this.props.getProjects();





    }



    render(){


        const proejctList = this.props.projects.projects.map((project, i)=>{
            return(

                <Row  key={i}>
                    <Col xs={12} bsStyle='project-list'>
                    {/*<BookItem  _id={project._id} title={project.title} images={project.images} description={project.description} price={project.price} />*/}
                        <ProjectLarge companyName={project.companyName} projectHeading={project.projectHeading} getter={project.getter} to={project.getter} img={project.bgImage} styleClass={'small'} />
                    </Col>
                </Row>

            )
        });


        return(
            <div>
                <Header h1={"Work Examples"} />

                <Well>
                {proejctList}
                </Well>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{

        projects: state.projects,


    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {
            getProjects,
            getHome,


        }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);