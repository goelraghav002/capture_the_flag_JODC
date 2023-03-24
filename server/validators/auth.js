import { check, validationResult } from 'express-validator';

export const validateSignupRequest = [
	check('name').notEmpty().withMessage('Name is required'),
	check('email').isEmail().withMessage('Email not valid'),
	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be 6 characters long'),
];
export const validateSigninRequest = [
	check('email').isEmail().withMessage('Email not valid'),
	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be 6 characters long'),
];

export const isRequestValidated = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ error: errors.array()[0].msg });
	}

	next();
};
