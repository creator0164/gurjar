const characters = "0123456789";
const accountSid = "ACe43a633db971158babb31016715a5ad1";
const authToken = "31a0d60a1b2a0fade5c78cfe7ebe040e";
const twilioPhoneNumber = "+12707180984";
const recipientPhoneNumber = "+639616259849";

const generateOTP = (length) => {
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += characters[Math.floor(Math.random() * 10)];
    if (i === 2) {
      otp += " ";
    }
  }

  return otp;
};

const otp = generateOTP(6);
console.log(otp);

const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Your OTP: " + otp,
    from: twilioPhoneNumber,
    to: recipientPhoneNumber,
  })
  .then((message) => console.log("OTP sent successfully! " + message.sid))
  .catch((error) => console.log("Error sending OTP:", error));
