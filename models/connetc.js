var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://radheshyamlodhi48:WDVwoo3fb5U9zkln@cluster0.66ujv2h.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
