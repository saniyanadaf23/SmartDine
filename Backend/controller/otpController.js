import nodemailer from "nodemailer";

// In-memory OTP store
const otpStore = {}; 

// Utility function to generate OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// Send OTP to email
export const sendOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = generateOtp();
  otpStore[email] = otp;

  // Set up transporter using your Gmail credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nadafsaniya23@gmail.com", // YOUR Gmail address
      pass: "wdqq xqop udtz gwaf",  // your Gmail **App Password** (not normal password)
    },
    secure: true,
    logger: true, 
    debug: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Define the email options
  const mailOptions = {
    from: '"SmartDine" <nadafsaniya23@gmail.com>', // From field, your Gmail address
    to: email, // The recipient email
    subject: "Your SmartDine OTP Code",
    text: `Your OTP code is: ${otp}. It will expire in 5 minutes.`, // The email body
  };

  try {
    // Send OTP email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    console.error("Error sending email:", error);
    
    if (error.response) {
      res.status(500).json({ message: `Failed to send OTP: ${error.response}` });
    } else {
      res.status(500).json({ message: "Failed to send OTP" });
    }
  }
};

// Verify OTP
export const verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  const storedOtp = otpStore[email];
  if (storedOtp === otp) {
    delete otpStore[email]; // Clear OTP after successful verification
    return res.status(200).json({ message: "OTP verified successfully" });
  } else {
    return res.status(401).json({ message: "Invalid OTP" });
  }
};
