const argon2 = require("argon2");
const AppError = require("../utils/appError");
const {createUser} = require("../models/userModel");

exports.createUser = async (req, res, next) => {
    try {
        const newUser = req.body;

        newUser.password = await argon2.hash(newUser.password);

        const user = await createUser({
            ...newUser,
            created_at: new Date(),
            updated_at: new Date(),
        })

        user.id = undefined;
        user.password = undefined;

        res.status(201).json({
            status: "success",
            data: user,
        });
    } catch (err) {
        next(err)
    }
}