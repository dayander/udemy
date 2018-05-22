"use strict";

import axios from 'axios';

export function postContact(contact){
    return function(dispatch){

        axios({
            method: 'post',
            url: '/api/contact',
            data: contact,

        })
            .then(function(response){

                dispatch({type:"POST_CONTACT", payload:response.data})
            })
            .catch(function(err){
                dispatch({type:"POST_CONTACT_REJECTED", payload:"there was an error while sending your message"})
            })
    }
}