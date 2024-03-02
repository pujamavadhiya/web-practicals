// const mongoose = require('mongoose'); 

// mongoose.connect('mongodb+srv://puja:puja1211@cluster1.b29m8jd.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true }) 

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



const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/AdavanceWebtech', { useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

const SchemaCreate4 = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    email: {
    type: String,
    required: true,
    unique: true
    },
    age: {
    type: Number,
    default: 0
    },
    deregistered: {
    type: Date,
    default: Date.now
    }
    });

const obj= mongoose.model('SchemaCreate4',SchemaCreate4);

//const newobj = new obj({
    //name:'DJ',
    //email:'dj@gmail.com',
    //age:22
//})

//newobj.save()
    //.then(SchemaCreate4 => console.log('User created:', SchemaCreate4))
    //.catch(err => console.error(err))

  obj.find({name:"Shubham"})
  .then((doc)=>{
    console.log(doc);
  })

  .catch((err)=>{
    console.log(err)
  });
  
  const us1 = new obj({name:"Yash",
  email: "yashj2@gmail.com",
  age: 21});

  const us2 = new obj({name:"jash",
  email: "jash9@gmail.com",
  age: 21});

  obj.collection.insertMany([us1, us2])
  .then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });

  // obj.updateOne({name:"DJ"},{$set:{name:"Dhruvil Jariwala"}})
  // .then((docs)=>{
  //   if(docs) {
  //     console.log(docs);
  //   } else {
  //     console.log("no such user exist");
  //   }
  // }).catch((err)=>{
  //   console.log(err)
  // });

  obj.deleteOne({name:"Dhruvil"})
  .then((docs)=>{
    if(docs) {
      console.log(docs)
    } else {
      console.log("no such user exist");
    }
  }).catch((err)=>{
    console.log(err);
  })