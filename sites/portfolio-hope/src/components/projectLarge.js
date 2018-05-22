'use strict';


import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


import {Well, Col} from 'react-bootstrap';


class ProjectLarge extends React.Component{
    constructor(props){
        super(props);

        this.state={
            companyName: this.props.companyName,
            projects: {vim: {},alc: {}},
            getter: this.props.getter,
            to: this.props.to,
            projectHeading: this.props.projectHeading,



        }
    }



    render(){
        return(
            <Link className="overlay-effect" params={this.state.to} to={this.state.to}>
            <div style={{ backgroundImage: `url(${this.props.img})`}} className={this.props.styleClass + ' project-large'}>
                <div className="project-large content">
                <div className="content-align">
                <h2>{this.state.companyName}</h2>
                <h3>{this.state.projectHeading}</h3>
                </div>
                </div>


            </div>
            </Link>

        )
    }
}








export default ProjectLarge;