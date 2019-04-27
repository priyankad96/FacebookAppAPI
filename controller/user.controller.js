const user = require('../schema/user.schema');
const {db} = require('../config/database');
const Sequelize = require('sequelize');

//insert data
exports.post = (body, done) => {

    user.create(body).then((userData) => {
        if (userData) {
            done(null, userData)
        }
    }).catch((err) => {
        console.log(err)
    })
};

//login check
exports.login = (body,done) => {
    // const {userName}=body;
    db.query("select * from tblUsers where uName = '" + body.uName + "' and password = " + body.password ).then((userData) => {
        if (userData) {
            done(null, userData)
        }
    }).catch((err) => {
        console.log(err)
    })
};


