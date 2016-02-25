var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;


var bookModel = new Schema({
	title:{type: String},
	author:{type: String},
	genre:{type: String},
	read:{type: Boolean, default:false},

})

module.exports=mongoose.model('Book', bookModel);
/*
var book1= new mybook({
	title:"First Book",
	author:"Prasanta Mishra",
	genre:"Technology",
	read:"true",
})
book1.save(function(err, book1){
	if (err) return console.error(err);
});
*/