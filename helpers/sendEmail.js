const nodemailer = require("nodemailer");
require("dotenv").config();
const { META_UA_PASSWORD, META_UA_EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: { user: META_UA_EMAIL, pass: META_UA_PASSWORD },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: META_UA_EMAIL };
  console.log(email);
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
