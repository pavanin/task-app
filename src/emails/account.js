const sgMail = require('@sendgrid/mail');


const apikey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(apikey);

const sendWelcomeEmail = (email, name) => {
    console.log("email service called");
    sgMail.send({
        to: email,
        from: 'pavanikitty@gmail.com',
        subject: 'Welcome!!',
        text: `Welcome to the task app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pavanikitty@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye!, ${name}. I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}