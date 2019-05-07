const user = require('../schema/user.schema');
const {db} = require('../config/database');
const Sequelize = require('sequelize');

//insert data
exports.post = (body,done) => {
    user.findOne({where:{uName: body.uName}}).then((result) => {
        if(result) {
            done({message: 'User Already Exist'});
        } else {
            user.create(body).then((newUser) => {
                if(newUser) {
                    done(null,newUser);
                } else {
                    done({message: 'User Not Created'});
                }
            }).catch((err) => {
                done(err);
            });
        }
    }).catch((err)=>{
        done(err);
    })
}

//login check
exports.login = (body,done) => {
    user.findOne({where: {uName: body.uName}}).then((result) => {
        if(result) {
            done(null, result);
        }
        else {
            done(err);
        }
    }).catch((err) => {
        done(err);
    });
}


