"use strict";
import {combineReducers} from 'redux';

//import Reducers



import {cartReducer} from './cartReducers';
import {projectReducer} from './projectsReducer';
import {contactReducer} from './contactReducers';
import {blogReducer} from './blogReducers';




// combine reducers


export default combineReducers({
    projects: projectReducer,
    cart: contactReducer,
    posts: blogReducer,


})