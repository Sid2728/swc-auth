const express=require('express');
const app =express();
const authRoutes=require('./routes/auth-routes');
const passportSetup=require('./config/passport-setup');

app.set('view engine','ejs');


// set up routes

app.use('/auth',authRoutes);

// create home route
app.get('/',(res,req)=>{
    res.render('home');
})
const port=process.env.PORT
app.listen( port || 3000,()=>{
    console.log(`The server is listening at 3000`)
})