import express from "express"
import users from "./user.js"

const userRouter = express.Router()

userRouter.get("/api/home", (req, res) => {
    res.status(200).send({
        message: "Welome to Home Page",
        success: true
    })
})

userRouter.get("/api/user", (req, res) => {
    res.send({
        message: "Users",
        result: users,
        success: true
    })
})

userRouter.get("/api/user/:id", (req, res) => {
    const filteredUser = users.filter((user) => {
        return user.id == req.params.id
    })
    res.send({
        message: `Welcome ${filteredUser[0].name}`,
        result: filteredUser,
        success: true
    })
})

export default userRouter