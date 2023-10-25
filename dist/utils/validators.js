import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty())
                break;
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Email must be valid"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
];
//# sourceMappingURL=validators.js.map