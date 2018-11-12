// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var app        = express();  
var crypto = require('crypto');
var bodyParser = require('body-parser');
const md5 = data => crypto.createHash('md5').update(data).digest("hex");

require('mongoose')
.connect('mongodb://localhost:27017/handshakeonit', { useNewUrlParser: true });

var User = require('./app/models/user');
var Contract = require('./app/models/contract');
var ContractRender = require('./render');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =======================================================================

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    next();
});



app.get('/', function(req, res) {
    res.json({ message: 'hello hand shake on it api!' });   
});


router.route('/users')

    // POST http://localhost:8080/api/users)
    .post(function(req, res) {

        var payload = req.body; 
        var user = new User(); 
        user.fullName = payload.fullName;
        user.password = payload.password;
        user.userEmail = payload.userEmail;
        user.phoneNumber = payload.phoneNumber;

        if (user.password) {
            user.password = md5(user.password);
        }

        User.findOne({userEmail : user.userEmail}, function(err, docs) {
            if (err) {
                res.send(err);
            }

            if (docs) {
                res.send({
                    code: 401,
                    message: "Account already exists !"
                });
            } else {
                // save the user;
                user.save(function(error, newUser) {
                    if (error) {
                        res.send(error);
                    }
                    res.json({ message: 'User created!', code: 200, userId: newUser._id });
                });
            }
        });
    })

    // GET http://localhost:8080/api/users)
    .get(function(req, res) {
        User.find(function(err, docs) {
            if (err) {
                res.send(err);
            }
            res.json(docs);
        });
    });


router.route('/login')
    
    // POST http://localhost:8080/api/login)
    .post(function(req, res) {

        var payload = req.body;
        var userEmail = payload.userEmail;
        var password = md5(payload.password);
        
        User.findOne({userEmail : userEmail, password: password} , function(err, docs) {
            if (err) {
                res.send(err);
            }
            if (docs) {
                res.json({
                    message: "Successfully",
                    code: 200,
                    userId: docs._id
                });
            } else {
                res.json({
                    message: "Wrong password",
                    code: 404
                });
            }
        });
    });

router.route('/fbSignUp')

    // POST http://localhost:8080/api/fbSignUp)
    .post(function(req, res) {
        var payload = req.body;
        var fullName = payload.userName;
        var userEmail = payload.userEmail;
        var facebookId = payload.facebookId;
       
        User.findOne({userEmail : userEmail} , function(err, docs) {
            console.log("err", err);

            if (err) {
                res.send(err);
            }

            if (docs) {
                res.json({
                    message: "Successfully",
                    code: 200,
                    userId: docs._id
                });
            } else {
                var user = new User(); 
                user.fullName = fullName;
                user.password = md5(Date.now().toString());
                user.userEmail = userEmail;
                user.facebookId = facebookId;

                 // save the user;
                user.save(function(error, newUser) {
                    if (error) {
                        res.send(error);
                    }

                    res.json({ message: 'User created!', code: 200, userId: newUser._id });
                });
            }
        });
    });
// on routes that end in /users/:userId 
// ------------------------------------
router.route('/users/:userId')

    // GET http://localhost:8080/api/users/:userId)
    .get(function(req, res) {
        User.findById(req.params.userId, function(err, docs) {
            if (err) {
                res.send(err);
            }
           
            if (docs) {
                res.json({
                    code: 200,
                    content: docs
                });
            } else {
                 res.json({
                    message: "Record not found",
                    code: 404
                });
            }
        });
    })
    
// DELETE http://localhost:8080/api/users/:userId)
app.delete('/api/users/:userId', function(req, res) {
    User.deleteOne({
        _id: req.params.userId 
    }, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    });
});

// contract api

// POST http://localhost:8080/api/contracts)
app.post('/api/contracts', function(req, res) {

    var payload = req.body; 
    var contract = new Contract();

    console.log(payload);

    contract.name = payload.name;
    contract.type = payload.type;
    contract.detail = payload.detail;
    contract.created = Date.now();

    // save the user;
    contract.save(function(error, newContract) {
        if (error) {
            res.send(error);
        }
        res.json({ message: 'Contract created!', code: 200, userId: newContract._id });
    });
});


// GET http://localhost:8080/api/contracts)
app.get('/api/contracts', function(req, res) {
    Contract.find(function(err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
});


// DELETE http://localhost:8080/api/contracts/:contractId)
app.delete('/api/contracts/:contractId', function(req, res) {
    Contract.deleteOne({
        _id: req.params.contractId 
    }, function(err, contract) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    });
});

app.get('/html/:contractId', function(req, res) {
    Contract.findById(req.params.contractId, function(err, docs) {
        if (err) {
            res.send(err);
        }
       
        if (docs) {
            const contractRender = new ContractRender();
            
            contractRender.html(docs.type, docs.detail).then(data => {
                res.send(data);
            });
           
        } else {
             res.json({
                message: "Page not found",
                code: 404
            });
        }
    });
});

app.get('/pdf/:contractId', function(req, res) {
    Contract.findById(req.params.contractId, function(err, docs) {
        if (err) {
            res.send(err);
        }
       
        if (docs) {
            const contractRender = new ContractRender();
            
            contractRender.pdf(req.params.contractId).then(function(data) {
                res.contentType("application/pdf");
                res.send(data);
            });
        } else {
             res.json({
                message: "Can not provide pdf",
                code: 404
            });
        }
    });
});

// REGISTER OUR ROUTES -------------------------------

app.use('/api', router);

app.use('/template', express.static('template'))

// START THE SERVER
// =================
app.listen(port);

console.log('ShakeOn Server Start On Port : ' + port);