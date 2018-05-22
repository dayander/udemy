import React from 'react';
import {getProjects, getHome,getOne} from '../../actions/projectsActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from "../Header";
import PullQuote from "../pullQuote";
import {Link} from 'react-router-dom';
import Picture from "./Picture";
import {Row, Col} from 'react-bootstrap';



class ProjectPage extends React.Component{
    constructor(props){
        super(props);


        let arr = this.props.projects.projects
        //
        //
        // let p = arr.find(x => x.projectName === this.props.match.params.title);


        this.state={
             project: this.props.projects.projects.find(x => x.getter === this.props.match.url),
            index: this.props.projects.projects.findIndex(x => x.getter === this.props.match.url),

            // projects: [],
            // vim: this.props.projects.projects[0],
            // alc:this.props.projects.projects[1],
            // p3:this.props.projects.projects[2],

        }
    }


    componentDidMount(){

        document.title = this.state.project.projectHeading +' || Anderson Day';
        //this.props.getOne(this.props.match.params.title);

         // this.props.getProjects();
        // Set focus to the content container
        document.getElementById('app').focus();

        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);



    }


    render(){

console.log(this.props)



        // console.log('test', this.state.project);

        return(
            <div ref='hey'>


            <Header color={"#fff"} img={this.state.project.bgImage} h1={this.state.project.companyName} h2={this.state.project.projectHeading}/>
                <PullQuote header={this.state.project.challengeHeading} body={this.state.project.challenge}/>
                <Row >
                    <div className="container">
                    <Col xs={12} sm={6}>
                <Picture img={this.state.project.challenge01.imgPath} alt={this.state.project.challenge01.altText}/>
                    </Col>
                        <Col xs={12} sm={6}>
                <Picture img={this.state.project.challenge02.imgPath} alt={this.state.project.challenge02.altText} />
                        </Col>
                    </div>
                </Row>

                <PullQuote header={this.state.project.approachHeading} body={this.state.project.approach}/>

                <Row >
                    <div className="container">
                    <Col xs={12} sm={6}>
                        <Picture img={this.state.project.process01.imgPath} alt={this.state.project.process01.altText}/>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Picture img={this.state.project.process02.imgPath} alt={this.state.project.process02.altText} />
                    </Col>
                    </div>
                </Row>

                <PullQuote header={this.state.project.outcomeHeading} body={this.state.project.outcome}/>
                <Row>
                    <div className="container">
                    <Col xs={12}>
                        <Picture img={this.state.project.outcome01.imgPath} alt={this.state.project.outcome01.altText}/>

                    </Col>
                    </div>
                </Row>







                {/*<Link params={this.state.projectArr[this.state.index - 1].to} to={this.state.projectArr[this.state.index - 1].to}>*/}
                    {/*Previous Project*/}
                {/*</Link>*/}
            </div>
        )
    }
}



const mapStateToProps = (state)=>{
    return{

        projects: state.projects,
        projectName: state.projectName,


    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {
            getProjects,
            getHome,
            getOne,

        }, dispatch)
};


 export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);