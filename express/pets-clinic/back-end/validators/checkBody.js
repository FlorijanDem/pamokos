const { body, checkExact } = require("express-validator");
const argon2 = require("argon2");
const { getUserByEmail } = require("../models/userModel");

exports.checkSignupBody = [
  body("first_name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .toLowerCase(),

  body("last_name")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .toLowerCase(),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .normalizeEmail()
    .custom(async (email) => {
      try {
        const user = await getUserByEmail(email);

        if (user) throw new Error("Email already in use");

        return true;
      } catch (err) {
        throw new Error(err.message);
      }
    }),

  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

  checkExact([], { message: "Invalid fields" }),
];

exports.checkLoginBody = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .normalizeEmail(),

  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .custom(async (password, { req }) => {
      try {
        const user = await getUserByEmail(req.body.email);

        if (!user) throw new Error("User not found");

        const isPasswordCorrect = await argon2.verify(user.password, password);

        if (!isPasswordCorrect) throw new Error("Incorrect email or password");

        return true;
      } catch (err) {
        throw new Error(err.message);
      }
    }),

  checkExact([], { message: "Invalid fields" }),
];

exports.checkRegisterPetBody = [
  body("name").trim().notEmpty().withMessage("Name is required").toLowerCase(),

  checkExact([], { message: "Invalid fields" }),
];

exports.checkCreateAppointmentBody = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .normalizeEmail(),

  body("date")
    .trim()
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Invalid date format"),

  body("time")
    .trim()
    .notEmpty()
    .withMessage("Time is required")
    .isTime({
      hours: { min: 0, max: 23 },
      minutes: { min: 0, max: 59 },
    })
    .withMessage("Invalid time format"),

  body("notes").trim().optional().isString().withMessage("Invalid notes"),


  body("pet_name").trim().isString().withMessage("Invalid pet name"),

  checkExact([], { message: "Invalid fields" }),
];

exports.checkUpdateAppointmentBody = [
  body("date").trim().optional().isISO8601().withMessage("Invalid date format"),

  body("time")
    .trim()
    .optional()
    .isTime({
      hours: { min: 0, max: 23 },
      minutes: { min: 0, max: 59 },
    })
    .withMessage("Invalid time format"),

  body("notes").trim().optional().isString().withMessage("Invalid notes"),

  body("pet_name").trim().optional(),

  body("confirmed")
    .trim()
    .optional()
    .isBoolean()
    .withMessage("Invalid confirmed value")
    .custom((confirmed, { req }) => {
      if (req.user?.role !== "admin") throw new Error("You are not an admin");

      return true;
    }),

  body("rating")
    .trim()
    .optional()
    .isInt({ min: 1, max: 5 })
    .withMessage("Invalid rating value")
    .custom((rating, { req }) => {
      if (req.user?.role === "admin")
        throw new Error("You are not allowed to rate");

      req.body.confirmed = "true";

      return true;
    }),

  checkExact([], { message: "Invalid fields" }),

  body().exists().withMessage("No fields to update"),
];
