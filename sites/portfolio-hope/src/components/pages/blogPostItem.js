import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPosts} from '../../actions/blogActions';
import Header from "../Header";



class BlogPostItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            post: this.props.posts.posts.find(x => x.name.toLowerCase() == this.props.match.params.title),
            // index: this.props.projects.projects.findIndex(x => x.getter === this.props.match.url),

            // projects: [],
            // vim: this.props.projects.projects[0],
            // alc:this.props.projects.projects[1],
            // p3:this.props.projects.projects[2],

        }
    }


    componentDidMount(){
        document.title = this.state.post.title +' || Anderson Day';



        // Set focus to the content container
        document.getElementById('app').focus();

        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);


        //this.props.getOne(this.props.match.params.title);


        this.props.getPosts();






    }


    render(){



        return(
            <div>
                <Header h1={this.state.post.title}  h2={this.state.post.name}/>


<h2>{this.state.post.name}</h2>

            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
    posts:state.posts,

    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {

            getPosts

        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostItem);