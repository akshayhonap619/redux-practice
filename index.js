/**
 * Created by Akshay on 6/5/2018.
 */
var express = require('express')
const bodyParsser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname,'public')))

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
        clientID : '257449094800143',
        clientSecret : 'a81b714a11b89d97499fe75fe58d67b9',
        callbackURL : 'https://a-sample.herokuapp.com/auth/facebook/callback'
        //callbackURL : 'https://localhost:3000/auth/facebook/callback'
    },
    function(accessToken, refreshToken, profile, done){
        console.log("Profile is ")
        console.log(profile)
    }
))


app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']} ));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.

app.post('/auth/facebook/callback',
  passport.authenticate(('facebook'),{ 
    failureRedirect: '/g',
    failureFlash: true }),function (req,res) {
        res.redirect('/')
    })

app.get('/g',(req,res)=>{
    res.send("Welcome")
})

app.get('/m',(req,res)=>{
    res.send("Success Welcome")
})



app.listen(process.env.PORT || 3000)