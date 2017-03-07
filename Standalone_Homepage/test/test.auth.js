var Auth = require("../src/Auth.js")
var assert = require("assert");
var mlog = require("mocha-logger");
 

global.location = [];
global.location.reload = function() { message = arguments }
global.location.replace = function() { message = arguments }
global.fetch = require('node-fetch');
global.alert = function() { message = arguments }
global.localStorage = [];
global.localStorage.token = '';


/**
 * 
 * Signup
 * Route: http://0.0.0.0:0000/users/signup/
 * HTTP Verb: POST
 * JSON Req: {email:"xxx@xxx", password:"xxx", firstname:"xxx", lastname:"xxx"}
 * JSON Res: {result: 0/1, error:"xxx", userToken:"xxx"} 
 * 
 */
describe('the register API testing: ',
    () => {
        it('should register with correct input', 
            () => {
                global.location.reload = function() { message = arguments }
                return Auth.register("Peth", "Leth", "test@oath.pl", "test@pass").then(
                    json => {
                        assert(!json.result)
                    }
                )
        })
        it('should not register with incorrect input', 
            () => {
                global.location.reload = function() { message = arguments }
                return Auth.register("kk", "kk", "kk", "kk").then(
                    json => {
                        assert(json.result)
                    }
                )
        })
        it('should not register with same', 
            () => {
                global.location.reload = function() { message = arguments }
                return Auth.register("Peth", "Leth", "test@oath.pl", "test@pass").then(
                    json => {
                        assert(json.result)
                        
                    }
                )
        })
})



describe('Login Testing:',
    () => {
        var temp = localStorage.token
        it('should login with correct account and password', 
            () => {
                return Auth.login("test@oath.pl","test@pass").then(
                    json => {
                        assert(!json.result)
                    }
                )
            }
        )
    }
 )

/**
 * Route: http://0.0.0.0:0000/users/account/password
 * HTTP Verb: POST
 * Authentication: Auth Header JSON req: {password: "xxx"}
 * JSON res: {result: 0/1, error: "xxx"}
 */
describe('Password Update:',
    () => {
        var temp;
        it('should update the password with correct token', 
            () => {
                temp = localStorage.token
                return Auth.updatePassword("123456789").then(
                    json => {
                        assert(json.result === 0)
                    }
                )
            }
        )
        it('should not update the password with a wrong token', 
            () => {
                localStorage.token = "12324"
                return Auth.updatePassword("123456789").then(
                    json => {
                        localStorage.token = temp
                        assert(json.result === 1)
                    }
                )
            }
        )
        it('should not update the password if it is too short', 
            () => {
                return Auth.updatePassword("12").then(
                    json => {
                        assert(json.result === 1)
                    }
                )
            }
        )
        
    }
)


/**
 * Route: http://0.0.0.0:0000/users/account/delete
 * HTTP Verb: POST
 * Authentication: Auth Header JSON req: {}
 * JSON res: {result: 0/1, error: "xxx"}  
 */
describe('the delete API testing: ',
    () => {
        it('should delete with correct input', 
            () => {
                return Auth.deleteAccount().then(
                    json => {
                        assert(!json.result)
                    }
                )
        })
        it('should not delete with same input', 
            () => {
                return Auth.deleteAccount().then(
                    json => {
                        assert(json.result)
                    }
                )
        })
})
