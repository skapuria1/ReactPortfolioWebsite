// netlify/functions/submitForm.js
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  console.log('Received event:', event);

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Configure the transporter for Gmail 
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    
    // Mail options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Confirmation of Message Received',
      text: `Hello ${name},\n\nWe have received your message: "${message}".\n\nThank you for reaching out to us!`,
    };

    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.toString() }),
    };
  }
};
