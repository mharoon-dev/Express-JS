import { UserSchema } from "../models/user.js";

const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    res.json({
      status: false,
      message: "All fields are required!",
    });
  } else {
    if (!email.includes("@")) {
      res.status(400);
      res.json({
        status: false,
        message: "Invalid Email",
      });
    } else {
      if (password.length < 8) {
        res.status(400);
        res.json({
          status: false,
          message: "Password should be at least 8 characters",
        });
      } else {
        const isUserExists = await UserSchema.findOne({ email: email });
        console.log(isUserExists + " ====>>> user exists");

        if (isUserExists) {
          res.status(400);
          res.json({
            status: false,
            message: "This Email is already exists!",
          });
        } else {
          let user = {
            name: name,
            email: email,
            password: password,
          };
          const userSchemaCheck = new UserSchema(user);
          if (userSchemaCheck) {
            const saveUser = userSchemaCheck.save();
            res.status(200);
            res.json({
              status: true,
              message: "Signup Sucessfully!",
            });
          }
        }
      }
    }
  }
};
const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    res.json({
      status: false,
      message: "All fields are required!",
    });
  } else {
    if (!email.includes("@")) {
      res.status(400);
      res.json({
        status: false,
        message: "Invalid Email",
      });
    } else {
      const isUserExists = await UserSchema.findOne({ email: email });
      console.log(isUserExists + "=====>>>>> user exists");

      if (isUserExists) {
        if (isUserExists.password === password) {
          res.status(200);
          res.json({
            status: true,
            message: "login Sucessfully!",
          });
        } else {
          res.status(400);
          res.json({
            status: false,
            message: "Invalid Password",
          });
        }
      } else {
        res.status(400);
        res.json({
          status: false,
          message: "Invalid Email",
        });
      }
    }
  }
};

// get data the user
const getDataController = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const founduser = await UserSchema.findOne({ email: email });

  if (founduser) {
    res.status(200);
    res.json({
      status: true,
      message: "user found!",
      data: founduser,
    });

    return founduser;

  } else {
    res.status(400);
    res.json({
      status: false,
      message: "user not found!",
    });
  }
};

// update data
const updateDataController = async (req, res , getDataController) => {
    if ( getDataController) {
      console.log(await getDataController.email);
      res.status(200);
      res.json({
        
        status: true,
        message: "Data updated successfully!",
      })
    }

};

// const logoutController = (req, res) => {
//   res.status(200);
//   res.json({
//     status: true,
//     message: "logout Sucessfully!",
//   });
// };


export { signupController, loginController, getDataController ,updateDataController };
 