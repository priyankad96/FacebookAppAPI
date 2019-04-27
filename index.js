var express = require('express');
const bodyparser=require('body-parser');
const {db}=require('./config/database');
var path = require('path');
var app = express();

var ImageDir = path.join(__dirname, '/imageUploads');
app.use('/static',express.static(ImageDir));

var userRoute = require('./routes/user.routes');
//var imageRoute=require('./routes/image.routes');

app.get('/',(req,res)=>{
    res.end("hello start property backend")
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
if (db){
    console.log("sucess")
} else {
    console.log("not")
}
//app.use('/product',productRoute);
app.use('/user',userRoute);
//app.use('/image',imageRoute);s


app.listen(3010, (err) => {
    if (err) {
        console.log(err)
        console.log('Error in connecting with port 3010');
    } else {
        console.log('Server has been set up on port 3010');
    }
});
