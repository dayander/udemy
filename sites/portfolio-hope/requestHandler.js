"use strict"
import axios from 'axios';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';

// REACT-ROUTER 4 CHANGES
//import {match, RouterContext} from 'react-router';
import {StaticRouter} from 'react-router-dom';
//import { renderToString } from 'react-router-server';

import reducers from './src/reducers/index';
import routes from './src/route';

function handleRender(req, res){

    // if(req.url=='/blog'){
    //     axios.get('http://localhost:4001/posts')
    //         .then(function(response){
    //             // var myHtml = JSON.stringify(response.data);
    //             // res.render('index', {myHtml});
    //             const initStore = {}
    //             response.data.forEach(post =>{
    //                 initStore[post.title] = post;
    //             })
    //
    //
    //             // STEP-1 CREATE A REDUX STORE ON THE SERVER
    //             const store = createStore(reducers, {"projects":{"projects":[], }, "initStore": initStore, "contact": null, "posts":{"posts":response.data }} );
    //
    //             // STEP-2 GET INITIAL STATE FROM THE STORE
    //             const initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
    //             // STEP-3 IMPLEMENT REACT-ROUTER ON THE SERVER TO INTERCEPT CLIENT REQUESTs AND DEFINE WHAT TO DO WITH THEM
    //             const context = {};
    //             console.log("How context looks like? ", context.url);
    //             const reactComponent = renderToString(
    //                 <Provider store={store}>
    //                     <StaticRouter
    //                         location={req.url}
    //                         context={context}>
    //                         {routes}
    //                     </StaticRouter>
    //                 </Provider>
    //             );
    //
    //             if (context.url) {
    //                 // can use the `context.status` that
    //                 // we added in RedirectWithStatus
    //                 redirect(context.status, context.url)
    //             } else {
    //                 res.status(200).render('index', {reactComponent, initialState})
    //             }
    //
    //         })
    //         .catch(function(err){
    //             console.log('#Initial Server-side rendering error', err);
    //         })
    //
    //
    //
    //
    //
    // }


    axios.get('http://localhost:4001/projects')
        .then(function(response){
            // var myHtml = JSON.stringify(response.data);
            // res.render('index', {myHtml});
            const initStore = {}
            response.data.forEach(project =>{
                initStore[project.projectName] = project;
            })



            // STEP-1 CREATE A REDUX STORE ON THE SERVER
            const store = createStore(reducers, {"projects":{"projects":response.data, }, "initStore": initStore, "contact": null, "posts":{"posts":[] }} );

            // STEP-2 GET INITIAL STATE FROM THE STORE
            const initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
            // STEP-3 IMPLEMENT REACT-ROUTER ON THE SERVER TO INTERCEPT CLIENT REQUESTs AND DEFINE WHAT TO DO WITH THEM
            const context = {};
            console.log("How context looks like? ", context.url);
            const reactComponent = renderToString(
                <Provider store={store}>
                    <StaticRouter
                        location={req.url}
                        context={context}>
                        {routes}
                    </StaticRouter>
                </Provider>
            );

            if (context.url) {
                // can use the `context.status` that
                // we added in RedirectWithStatus
                redirect(context.status, context.url)
            } else {
                res.status(200).render('index', {reactComponent, initialState})
            }

        })
        .catch(function(err){
            console.log('#Initial Server-side rendering error', err);
        })
}

module.exports = handleRender