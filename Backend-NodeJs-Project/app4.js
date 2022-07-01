import express from "express";
import nodemailer from "nodemailer";

const app =express();

app.use(express.json());

app.get("/", (req,res, next)=>{
  res.send("AM gET REQUEST")
})

app.post("/", async(req, res, next)=>{

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your email',
        pass: 'your pwd' // if 2-way authentication in your email then you will need to create app password.
    }
});
 
let mailDetails = {
    from: 'Rahul PUNDIR',
    to: 'rahul4uk.pundir@gmail.com',
    subject: 'Test mail',
    text: 'Doing testing mail'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
        console.log(err)
    } else {
        console.log('Email sent successfully');
    }
});

}

)


app.listen(5000);