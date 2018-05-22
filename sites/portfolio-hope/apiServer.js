"use strict"
var express = require('express');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();
app.use(cookieParser());

// APIs
var mongoose = require('mongoose');

// const uri = 'mongodb://dayander:Burton12!@ds133876.mlab.com:33876/portfolio';
// const options = {server:{
//      socketOptions:
// {
//     socketTimeoutMS: 5000,
//         connectTimeoutMS: 60000,
// }
//
//
// }};

//mongoose.connect(uri, options);
mongoose.connect('mongodb://dayander:Burton12!@ds133876.mlab.com:33876/portfolio');
// mongoose.connect('mongodb://localhost:27017/test');
var Contact = require('./models/contact.js');

var Projects = require('./models/projects.js');
var Post = require('./models/post.js');


var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB connection error:'));
// SET UP SESSIONS
app.use(session({
    secret: 'mySecretString',
    saveUnitialized: false,

    resave: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 2},
    store: new MongoStore({
        mongooseConnection: db,
        ttl: 24*60*60,
    })

}));


// GET BOOKS IMAGES API


app.get('/images', (req,res)=>{
    const imgFoler = __dirname + '/public/images';
    //get file system
    const fs = require('fs');

    //Read all files in system
    fs.readdir(imgFoler, (err, files)=>{
        if(err){
            return console.log(err);
        }
        const filesArr = [];
        //Iterate all images in dir
        files.forEach((file)=>{
            filesArr.push({name: file});
        })
        res.json(filesArr)
    })

})




app.get('/projects', function(req, res){

    console.log('req: ', req.body)

    Projects.find(function(err, projects){
        if(err){
            throw err;
        }

        res.json(projects)
    })
});


app.get('/projects/:projectName', function(req, res){



    var name = req.params.projectName;
    console.log(name);
    Projects.findOne(({projectName: name}),function(err, projects){
        if(err){
            throw err;
        }

        res.json(projects)
    })
});


app.post('/contact', function(req, res){

    var contact = req.body;
    Contact.create(contact, function(err, contact){
        if(err){
            throw err;
        }
        res.json(contact);
    })

});

app.get('/posts', function(req, res){



    Post.find(function(err, posts){

        if(err){
            throw err;
        }

        res.json(posts)
    })
});


app.get('/posts/:title', function(req, res){

    var name = req.params.title;
    console.log(name);
   Post.findOne(({name: name}),function(err, post){
        if(err){
            throw err;
        }

        res.json(post)
    })
});






app.post('/post/:title', function(req, res){

    var post = req.body;
    Post.create(post, function(err, post){
        if(err){
            throw err;
        }
        res.json(post);
    })

});





//Save session
// app.post('/cart', (req, res)=>{
//     // if (req.session.cart){
//     //     let cartUpdate = req.body;
//     //     let oldCart = req.session.cart;
//     //     let updatedCart = [...oldCart, ...cartUpdate]
//     //     req.session.cart = updatedCart;
//     //     req.session.save((err)=>{
//     //         if(err){
//     //             throw err
//     //         }
//     //         res.json(req.session.cart)
//     //     })
//     //     return;}
//     let cart = req.body;
//
//     req.session.cart = cart;
//     req.session.save((err)=>{
//         if(err){
//             throw err
//         }
//         res.json(req.session.cart)
//     })
// })
//
//
// app.get('/cart', (req,res)=>{
//     if( typeof req.session.cart !== 'undefined'){
//         res.json(req.session)
//     }
// })
//
//
// // END SESSION SET UP
//
//
//
//
// //---->>> POST BOOKS <<<-----
// app.post('/books', function(req, res){
//     console.log(req.body);
//     var book = req.body;
//     Books.create(book, function(err, books){
//         if(err){
//             throw err;
//         }
//         res.json(books);
//     })
//
// });
// //----->>>> GET BOOKS <<<---------
// app.get('/books', function(req, res){
//
//     Books.find(function(err, books){
//         if(err){
//             throw err;
//         }
//
//         res.json(books)
//     })
// });
// //---->>> DELETE BOOKS <<<------
// app.delete('/books/:_id', function(req, res){
//     var query = {_id: req.params._id};
//     Books.remove(query, function(err, books){
//         if(err){
//             throw err;
//         }
//         res.json(books);
//     })
// });
// //---->>> UPDATE BOOKS <<<------
// app.put('/books/:_id', function(req, res){
//     var book = req.body;
//     var query = {_id: req.params._id};
// // if the field doesn't exist $set will set a new field
//     var update = {
//         '$set':{
//             title:book.title,
//             description:book.description,
//             image:book.image,
//             price:book.price
//         }
//     };
// // When true returns the updated document
//     var options = {new: true};
//     Books.findOneAndUpdate(query, update,
//         options, function(err, books){
//             if(err){
//                 throw err;
//             }
//             res.json(books);
//         })
// })
// END APIs
app.listen(4001, function(err){
    if(err){
        return console.log(err);
    }
    console.log('API Sever is listening on http://localhost:4001');
        });


//-----------------------------------------------------------------------