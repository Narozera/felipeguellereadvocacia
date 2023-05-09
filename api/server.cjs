const path = require("path");
const express = require("express");

const app = express();

app.use(require("cors")());
app.use(express.json());


app.post("/send", (req, res, next) => {
  const fullName = req.body.fullName;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  require("./services/mailServices.cjs")(fullName, phone, email, message)
    .then((response) => res.json("Email enviado com sucesso!"))
    .catch((error) => res.status(500).json(error));
});

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  return res.json("hello world!");
})

app.listen(port, () => {
  console.log("server start");
});
