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

  res.status(200).json({ message: "Success" });
}
