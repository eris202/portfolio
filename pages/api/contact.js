// const handler = require("./handler")

export default function (req, res) {
  console.log(req.method);
  console.log(req.body);

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

  var templateParams = {
    name:  req.body.name,
    notes: 'Check this out!'
};
 
emailjs.send('<YOUR SERVICE ID>','<YOUR TEMPLATE ID>', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(err) {
       console.log('FAILED...', err);
    });
}
