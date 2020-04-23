require('dotenv').config()
function validateInputRequest(req, res, next) {
    if(!req.body.text ) { // check for input validation
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function PostHandler(req, res, next) {
    
    var aylien = require("aylien_textapi");
    // .env file with Aylian's app id and app key
    var textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    }); 
 
}

exports.validateInputRequest = validateInputRequest;
exports.PostHandler = PostHandler;