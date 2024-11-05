use catalog
//11
db.books.find({title:/data/i})
//13
db.books.find().sort({title:1})
//14
db.books.find().sort({title:-1})
//15
db.books.countDocuments({title:/^j/i})
//16
db.books.find().sort({pageCount:-1}).limit(5)
//17
db.books.find({categories:{$exists:false}})
//18
db.books.find({shortDescription:{$exists:true}})
//19
db.books.find({id:{$type:ObjectId}}).count()
    
    
    



































































































































