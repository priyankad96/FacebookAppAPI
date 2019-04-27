const Sequelize = require('sequelize');
const {db} = require('../config/database')
const userSchema = db.define('tblUsers',{
    uid:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    fName:{
        type: Sequelize.STRING
    },
    lName:{
        type: Sequelize.STRING
    },
    uName:{
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATEONLY
    },
    gender: {
        type: Sequelize.INTEGER
    },


});

userSchema.sync({force:false}).then(()=>{
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
});

module.exports = userSchema;
