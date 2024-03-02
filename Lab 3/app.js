// const mongoose = require('mongoose'); 

// mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true }) 

//     .then(() => console.log('MongoDB connected')) 

//     .catch((err) => console.log(err)); 

// const krischema = new mongoose.Schema({ 

//     name: { 
    
//         type: String, 
    
//         required: true 
    
//         }, 
    
//     email: { 
    
//         type: String, 
    
//         required: true, 
    
//         unique: true 
    
//         }, 
    
//     age: { 
    
//         type: Number, 
    
//         default: 0 
//         }, 

//     deregistered: { 

//         type: Date, 

//         default: Date.now 

//     } 

// }); 

// const obj = mongoose.model('kri', krischema); 

// const newobj = new obj({ 

//     name: 'Jo', 
    
//     email: 'jon@gmail.com', 
    
//     age: 25 
    
//     }); 
    
     
    
//     // Save the new user document to the database 
    
//     newobj.save() 
    
//     .then(kri => console.log('User created:', kri)) 
    
//     .catch(err => console.error(err));

//     obj.find({}) 

//     .then((doc)=>{ 

//     console.log(doc); 

// }) 

// .catch((err)=>{ 

//     console.log(err); 

// }); 

// obj.find({name:"Jo"}) 

//     .then((doc)=>{ 

//     console.log(doc); 

// }) 

// .catch((err)=>{ 

//     console.log(err); 

// }); 

// const Newuser = new obj({name: 'krish', 

// email: 'ky@gmail.com', 

// age: 20}); 

 

// // it srore directly to collection 

// obj.collection.insertOne(Newuser) 

//     .then((data)=>{ 

//     console.log(data); 

// })

// .catch((err)=>{ 

//     console.log(err);} 

//     ); 

// const Newuser = new obj({name: 'krishna', 

// email: 'ku@gmail.com', 

// age: 20}); 

// const Newuser1 = new obj({name: 'kriti', 

// email: 'kr@gmail.com', 

// age: 21}); 

 

// // it srore directly to collection 

// obj.collection.insertMany([Newuser,Newuser1]) 

//     .then((data)=>{ 

//     console.log (data); 

//     }).catch((err)=>{ 

//     console.log(err);} 

//     ); 

// obj.updateOne({name:"josh"},{$set:{name: "jade"}}) 

//     .then((docs)=>{ 

//     if(docs) { 

//     console.log(docs); 

//     } else { 

//     console.log("no such user exist"); 

//     } 

// }).catch((err)=>{ 

//     console.log(err); 

// }) 

// obj.updateMany({age: 20},{$set:{ age: 15}}) 

//     .then((docs)=>{ 

//     if(docs) { 

//     console.log(docs); 

//     } else { 

//     console.log("no such user exist"); 

//     } 

// }).catch((err)=>{ 

//     console.log(err); 

// }) 

// obj.deleteOne({name: "jade"}) 

// .then((docs)=>{ 

//     if(docs) { 

//     console.log(docs); 

//     } else { 

//     console.log("no such user exist"); 

//     } 

// }).catch((err)=>{ 

//     console.log(err); 

// }) 

// obj.deleteMany({age: 15}) 

// .then((docs)=>{ 

//     if(docs) { 

//         console.log(docs); 

//     } else { 

//         console.log("no such user exist"); 

//     } 

// }).catch((err)=>{ 

//     console.log(err); 

// }) 

// obj.findOneAndDelete({name:"kriti"}) 

// .then((docs)=>{ 

//     if(docs) { 

//     console.log(docs); 

//     } else { 

//     console.log("no such user exist"); 

//     } 

// })

// .catch((err)=>{ 

//     console.log(err); 

// }) 