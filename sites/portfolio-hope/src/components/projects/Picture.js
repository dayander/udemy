import React from 'react';

class Picture extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            src: this.props.img,
            alt: this.props.alt,
        }
    }
        render(){
            return(
                <div className="">
                    <div className=" content">

                    <img className="image-center" src={this.state.src} alt={this.state.alt}></img>
                        </div>

                </div>
            )
        }
    }


export default Picture;
