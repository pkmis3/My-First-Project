
/* Set up imports  for this file*/
var express = require('express'), //set express
    mongoose = require('mongoose'), //set mongoose
    bodyParser=require('body-parser'); //set body-Parser


/*Connect to Mongo */
 mongoose.connect('mongodb://localhost/bookAPI'); 

 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
});



var Book = require('./models/bookModel');



var app = express();
var port = process.env.PORT||3000 ;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookrouter=express.Router();

bookrouter.route('/Books')
           .post(function(req,res){
              var book = new Book(req.body);
              book.save();
              res.send(book);

           })
           .get(function(req,res){
           	var query =req.query//{};

           	if(req.query.genre){
           		query.genre=req.query.genre;
           	}else if(req.query.genre){
           		query.title=req.query.title;
           	}
          	Book.find(query,function(err,books){
          		if(err)
           			res.status(500).send(err);
          		else
           			res.json(books);
                console.log('request served');
           	});

           });

 bookrouter.route('/Books/:bookId')
            .get(function(req,res){
           	
          	Book.findById(req.params.bookId,function(err,books){
          		if(err){
          			console.log(err);
           			res.status(404).send(err);}
          		else
           			res.json(books);
           	});

           });

app.use('/api', bookrouter);


app.get('/',function(req,res){
    res.send("welcome here");
    console.log("i was pinged");
});

app.listen(port, function(){
    console.log("application listening at port"+ port);
});
