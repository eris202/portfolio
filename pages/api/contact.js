// const handler = require("./handler")
const mailgun = require("mailgun-js");

export default function (req, res) {
  let phone = req.body.phone ? req.body.phone : "No phone number";
  const DOMAIN = "sandbox1a1b58cdfdbe4c8188804a05c3ab3fb7.mailgun.org";
  const api_key = "0b24b4461696027f461d5e06ca71f26a-6ae2ecad-51a67839";
  const mg = mailgun({ apiKey: api_key, domain: DOMAIN });
  const data = {
    from: `My Portfolio ${req.body.email}`,
    to: "erisanakorede@gmail.com",
    subject:
      "Erisan , I have a message from a client through my portfolio website",
    text: `
    phone: ${phone}
    Message: ${req.body.message}
    `,
  };

  if (req.body.name.trim() == "" || req.body.name < 3) {
    res.status(400).json({ message: "Please provide a name" });
    return;
  }
  if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      req.body.email.trim()
    )
  ) {
    res.status(400).json({ message: "Email is invalid" });
    return;
  }

  if (req.body.message < 10) {
    res.status(400).json({ message: "Please provide a sentence" });
    return;
  }

  mg.messages().send(data, function (error, body) {
    if (error) {
      res
        .status(501)
        .json({ error: error, msg: "Something went wrong, retry !!!" });

      return;
    }
    if (body) {
      res.status(200).json({
        msg: "Thanks for contacting me, i will get back to you in a bit.",
      });
    }
  });
}
