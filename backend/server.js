const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service
  auth: {
    user: 'sharma.madhav79@gmail.com', // Your email address
    pass: 'Madhav@1233',   // Your email password
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, destination, date, message } = req.body;

  const mailOptions = {
    from: 'sharma.madhav79@gmail.com',
    to: 'sharma.madhav79@gmail.com', // Admin's email address
    subject: 'New Booking Request',
    text: `Booking Details:\n\nName: ${name}\nEmail: ${email}\nDestination: ${destination}\nDate: ${date}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    }
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
