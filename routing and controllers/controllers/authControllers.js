const signupController = (req, res) => {
    res.status(200)
    res.json({
        status: true,
        message: "SignUp Sucessfully!",
    })
}
const loginController = (req, res) => {
    res.status(200)
    res.json({
        status: true,
        message: "login Sucessfully!",
    })
}
const logoutController = (req, res) => {
    res.status(200)
    res.json({
        status: true,
        message: "logout Sucessfully!",
    })
}

export {
    signupController,
    loginController,
    logoutController,
}