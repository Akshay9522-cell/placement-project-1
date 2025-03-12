const nodemailer = require("nodemailer");
const randomPassword=require('../utils/password')
 const password=randomPassword()
 



 const nodeMailer=async(dox)=>{
    
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'gmail' as the service/ true for port 465, false for other ports
        auth: {
          user: "akshaynamdev963@gmail.com",
          pass: "vzrf ylps cxkw xupc",
        },
      });
      
      // Set up email data
      const mailOptions = {
          from: '"akshay" <akshaynamdev963@gmail.com>', // Sender address
          to: dox, // dList of recipients
          subject: 'Hello from Akshay worlds', // Subject line
          text:  `akhsay namdev `, // Plain text body
          html:  `Your password is: ${password}` // HTML body
          
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred: ' + error.message);
        }
        console.log('Email sent: ' + info.response);
    });
      
}

module.exports=nodeMailer
