const { query, checkExact } = require("express-validator");
const { getUserById } = require("../models/userModel");
const { getAppointmentCount } = require("../models/appointmentModel");

exports.checkGetAllAppointmentsFilter = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Invalid page number"),

  query("limit").optional().isInt({ min: 1 }).withMessage("Invalid limit"),

  query("confirmed")
    .optional()
    .isString()
    .withMessage("Invalid filterBy")
    .isIn(["true", "false"])
    .withMessage("FilterBy must be 'confirmed'"),

  query("sortBy")
    .optional()
    .isString()
    .withMessage("Invalid sortBy")
    .isIn(["date", "rating", "confirmed"])
    .withMessage("SortBy must be 'date' or 'confirmed'"),

  query("sortDirection")
    .optional()
    .isString()
    .toUpperCase()
    .isIn(["ASC", "DESC"])
    .withMessage("SortDirection must be 'ASC' or 'DESC'"),

  query("userId")
    .optional()
    .isInt()
    .withMessage("Invalid userId")
    .custom(async (id) => {
      try {
        const user = await getUserById(id);

        if (!user) throw new Error("User not found");

        return true;
      } catch (err) {
        throw new Error(err.message);
      }
    }),

  checkExact([], { message: "Invalid fields" }),
];
