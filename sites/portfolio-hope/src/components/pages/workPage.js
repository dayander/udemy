'use strict';

import React from 'react';

import ProjectPage from '../projects/projectTemplate';

class WorkPage extends React.Component{
    render(){
        return(
            <div>
                <h1>This is my Work</h1>
                <ProjectPage/>
            </div>
        )
    }
}


export default WorkPage;