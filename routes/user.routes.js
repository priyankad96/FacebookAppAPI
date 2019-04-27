const {Router} = require('express')
var router = new Router()
const {post, login} = require('../controller/user.controller');

router.post('/', (req, res) => {
    console.log("body is", req.body)
    post(req.body, (err, result) => {
        if (err) {
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        } else {
            res.json(result)
            res.statusCode = 200;
            console.log("result is", result)
        }
    })
});

//get user by its name and password for login
router.post('/Login', (req, res) => {
    console.log("body is user and pass", req.body)
    login(req.body, (err, result) => {
        if (err) {
            res.json(err)
            res.statusCode = 404;
            console.log(err)
            res.send({'sucess': false, 'message': 'could not connect with db'});
        }/*else{
            res.json(result)
            res.statusCode = 200;
            console.log("result is" ,result[0][0])
            console.log(typeof(result));
        }*/

        if (result[0][0]) {
            res.send({'success': true, 'user': result[0][0]});
            // res.json(result);
            res.statusCode = 200;
            console.log("result is", result[0][0])
            console.log(result);
        } else {
            res.send({'success': false, 'message': 'User not found'});
        }
    })
});


module.exports = router;
