import express from "express";
import fs from "fs";
const app = express();
app.use(express.json());

let users = []

// sign up 
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name);
  console.log(email);
  console.log(password);
  if (!email || !name || !password) {
    res.status(400);
    res.json({
      status: false,
      message: "All feillds are required!",
    });
  } else {
    fs.readFile("./users.mjs", "utf-8", (err, data) => {
      if (!data) {
        users.push({
          name: name,
          email: email,
          password: password,
        });
        fs.writeFile("./users.mjs", JSON.stringify(users), "utf-8", (err) => {
          if (err) throw err;
        });
      } else {
        const parsedData = JSON.parse(data);
        // console.log(parsedData);
        users = parsedData;
        // console.log(users);
        users.push({
          name: name,
          email: email,
          password: password,
        });
        // console.log(users);
        fs.writeFile("./users.mjs", JSON.stringify(users), "utf-8", (err) => {
          if (err) throw err;
        });
      }
    });
    res.status(200);
    res.json({
      status: true,
      message: "You are Signed Up Sucessfully!",
    });
  }
});



// login 
app.post("/login", (req, res) => {
  const { loginEmail, loginPassword } = req.body;

  if (!loginEmail || !loginPassword) {
    res.status(400);
    res.json({
      status: false,
      message: "All feilds are required!",
    });
  } else {
    fs.readFile("./users.mjs", "utf-8", (err, data) => {
      const parsedData = JSON.parse(data);
      let foundUser = parsedData.find((user) => user.email == loginEmail);

      if (!foundUser) {
        res.status(400);
        res.json({
          status: false,
          message: "User not found!",
        });
      } else {
        if (foundUser.password == loginPassword) {
          res.status(200);
          res.json({
            status: true,
            message: "You are logged in sucessfully!",
          });
        } else {
          res.status(400);
          res.json({
            status: false,
            message: "Sorry! Invalid Credentials!",
          });
        }
      }
    });
  }
});

app.listen(3000, () => {
  console.log("server is working");
});
