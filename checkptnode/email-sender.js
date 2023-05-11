const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'xxx@gmail.com', // your email address
        pass: 'xxxx' // your email password
    }
});

// Define the email message
let mailOptions = {
    from: 'xxxxx@gmail.com', // sender address
    to: 'yyyy@gmail.com', // list of receivers
    subject: 'Test Email', // Subject line
    text: 'Hello world!', // plain text body
    html: '<b>Hello world!</b>' // html body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});