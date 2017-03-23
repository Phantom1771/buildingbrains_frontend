var Auth = require("../src/Auth.js")
var assert = require("assert");
var mlog = require("mocha-logger");
 
var AWSAddress = "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000"
var loginUrl = "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000/users/login"
var signupUrl = "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000/users/signup"
var forgetUrl = "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000/users/forgot"
var resetUrl = "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000/users/reset"
var accountUrl= "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000/users/account"
var profileUrl= "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000/users/profile"
var passwordUrl= "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000/users/password"
var deleteUrl= "http://ec2-52-36-226-213.us-west-2.compute.amazonaws.com:8000/users/delete"



global.location = [];
global.location.reload = function() { message = arguments }
global.location.replace = function() { message = arguments }
global.fetch = require('node-fetch');
global.alert = function() { message = arguments }
global.localStorage = [];
global.localStorage.token = '';

/**
 * 
 * Auth.api() 
 * 
 */
describe('the api function gives the correct request address',
    () => {
        it('should return the correct request address', 
            () => {
                assert.equal(AWSAddress, Auth.api(""))
        })
        it('should return the correct address for login',
            () => {
                assert.equal(loginUrl, Auth.api("/users/login"))
            }
        )
})

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

describe('the register API testing: ',
    () => {
        it('should delete with correct input', 
            () => {
                global.alert = function() { message = arguments }
                return Auth.deleteAccount().then(
                    json => {
                        assert(!json.result)
                    }
                )
        })
        it('should not delete with same input', 
            () => {
                global.alert = function() { message = arguments }
                return Auth.deleteAccount().then(
                    json => {
                        assert(json.result)
                    }
                )
        })
})
